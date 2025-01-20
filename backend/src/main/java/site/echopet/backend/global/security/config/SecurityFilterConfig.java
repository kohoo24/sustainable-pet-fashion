package site.echopet.backend.global.security.config;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import site.echopet.backend.global.security.filter.JSONUsernamePasswordAuthenticationFilter;

@Getter
@Configuration
@RequiredArgsConstructor
public class SecurityFilterConfig {

  private final JSONUsernamePasswordAuthenticationFilter usernamePasswordAuthenticationFilter;

}