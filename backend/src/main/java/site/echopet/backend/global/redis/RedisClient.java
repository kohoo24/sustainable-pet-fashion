package site.echopet.backend.global.redis;

public interface RedisClient<V> {

  String PRIVATE_KEY_PREFIX = "RSAKey:";

  void save(String key, V value);

  V findBy(String key);

  void deleteBy(String key);

}