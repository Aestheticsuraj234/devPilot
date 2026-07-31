package devPilot.backend.services.github;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Simple delay helper to stay under GitHub API secondary rate limits during indexing.
 */
@Component
public class GitHubRateLimiter {

    private final long delayMs;

    public GitHubRateLimiter(@Value("${app.github.api-delay-ms:50}") long delayMs) {
        this.delayMs = Math.max(0, delayMs);
    }

    public void pause() {
        if (delayMs <= 0) {
            return;
        }
        try {
            Thread.sleep(delayMs);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new IllegalStateException("Interrupted while rate limiting", e);
        }
    }
}
