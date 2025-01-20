package site.echopet.backend.global.security.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import site.echopet.backend.global.security.filter.JSONUsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final SecurityFilterConfig filterConfig;

  @Bean
  public SecurityFilterChain apiSecurityFilterChain(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer::disable)
        .cors(AbstractHttpConfigurer::disable)
        .formLogin(AbstractHttpConfigurer::disable);

    http.sessionManagement(config ->
        config.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

    http.addFilterBefore(filterConfig.getUsernamePasswordAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
        .addFilterBefore(filterConfig.getJwtAuthenticationFilter(), JSONUsernamePasswordAuthenticationFilter.class);

    return http.build();
  }

}