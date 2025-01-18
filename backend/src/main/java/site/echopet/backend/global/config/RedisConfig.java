package site.echopet.backend.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.RedisSerializer;

@Configuration
public class RedisConfig {

  // 추후 host, port, password 환경변수 처리 예정
  @Bean
  public RedisConnectionFactory redisConnectionFactory() {
    RedisStandaloneConfiguration configuration = new RedisStandaloneConfiguration("localhost", 6379);
    configuration.setPassword("1234");
    return new LettuceConnectionFactory(configuration);
  }

  @Bean
  public RedisTemplate<String, ?> redisTemplate() {
    RedisTemplate<String, ?> redisTemplate = new RedisTemplate<>();
    redisTemplate.setKeySerializer(RedisSerializer.string());
    redisTemplate.setValueSerializer(RedisSerializer.json());
    redisTemplate.setHashKeySerializer(RedisSerializer.string());
    redisTemplate.setHashValueSerializer(RedisSerializer.json());
    redisTemplate.setEnableTransactionSupport(true);
    return redisTemplate;
  }

}