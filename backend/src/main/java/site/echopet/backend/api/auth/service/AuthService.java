package site.echopet.backend.api.auth.service;

import java.security.KeyPair;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import site.echopet.backend.api.auth.controller.response.AuthGetKey;
import site.echopet.backend.api.auth.domain.RSAPrivateKey;
import site.echopet.backend.global.redis.RSAKeyClient;
import site.echopet.backend.global.utils.encrypt.RSAKeyGenerator;
import site.echopet.backend.global.utils.encrypt.RSAUtils;

@Service
@RequiredArgsConstructor
public class AuthService {

  private final RSAKeyClient rsaKeyClient;

  public AuthGetKey generateRSAKey() {
    KeyPair keyPair = RSAKeyGenerator.generateKeyPair();
    String publicKey = RSAUtils.keyToString(keyPair.getPublic());
    String redisKey = UUID.randomUUID().toString();
    RSAPrivateKey rsaPrivateKey = new RSAPrivateKey(keyPair.getPrivate());
    rsaKeyClient.save(redisKey, rsaPrivateKey);
    return new AuthGetKey(redisKey, publicKey);
  }

}