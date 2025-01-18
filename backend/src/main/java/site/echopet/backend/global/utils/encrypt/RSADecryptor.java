package site.echopet.backend.global.utils.encrypt;

import java.security.PrivateKey;
import java.util.Base64;
import javax.crypto.Cipher;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class RSADecryptor {

  private static final String ALGORITHM = "RSA";

  public static String decrypt(String cipherText, PrivateKey privateKey) throws Exception {
    byte[] encryptedBytes = Base64.getDecoder().decode(cipherText);
    Cipher cipher = Cipher.getInstance(ALGORITHM);
    cipher.init(Cipher.DECRYPT_MODE, privateKey);
    byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
    return new String(decryptedBytes);
  }

}