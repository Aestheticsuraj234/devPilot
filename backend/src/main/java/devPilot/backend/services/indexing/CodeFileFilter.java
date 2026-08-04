package devPilot.backend.services.indexing;

import java.util.Locale;
import java.util.Set;

import org.springframework.stereotype.Component;

@Component
public class CodeFileFilter {
    private static final Set<String> SKIP_DIR_PARTS = Set.of(
            "node_modules",
            ".git",
            "dist",
            "build",
            "target",
            ".next",
            "vendor",
            "__pycache__",
            ".idea",
            ".vscode",
            "coverage",
            "out");

    private static final Set<String> ALLOWED_EXTENSIONS = Set.of(
            "java", "kt", "kts", "scala",
            "ts", "tsx", "js", "jsx", "mjs", "cjs",
            "py", "go", "rs", "rb", "php",
            "c", "h", "cpp", "hpp", "cs",
            "swift", "m", "mm",
            "md", "mdx", "txt",
            "yml", "yaml", "json", "toml", "xml",
            "properties", "gradle", "sql",
            "sh", "bash", "zsh",
            "dockerfile", "makefile",
            "html", "css", "scss", "sass",
            "vue", "svelte");

    private static final Set<String> SKIP_FILENAMES = Set.of(
            "package-lock.json",
            "yarn.lock",
            "pnpm-lock.yaml",
            "composer.lock",
            "cargo.lock",
            "poetry.lock");
// backend\src\main\java\devPilot\backend\repository\filename.java
    public boolean isEligible(String path, long sizeBytes, long maxFileBytes) {
        if (path == null || path.isBlank()) {
            return false;
        }
        String normalized = path.replace('\\', '/');
        String lower = normalized.toLowerCase(Locale.ROOT);

        for (String part : lower.split("/")) {
            if (SKIP_DIR_PARTS.contains(part)) {
                return false;
            }
        }

        String fileName = lower.substring(lower.lastIndexOf('/') + 1);
        if (SKIP_FILENAMES.contains(fileName)) {
            return false;
        }
        if (fileName.startsWith(".")) {
            return false;
        }
        if (sizeBytes > maxFileBytes) {
            return false;
        }

        if ("dockerfile".equals(fileName) || "makefile".equals(fileName)) {
            return true;
        }

        int dot = fileName.lastIndexOf('.');
        if (dot < 0) {
            return false;
        }
        String ext = fileName.substring(dot + 1);
        return ALLOWED_EXTENSIONS.contains(ext);
    }

 public String detectLanguage(String path) {
        String lower = path.toLowerCase(Locale.ROOT);
        String fileName = lower.substring(lower.lastIndexOf('/') + 1);
        if ("dockerfile".equals(fileName)) {
            return "dockerfile";
        }
        if ("makefile".equals(fileName)) {
            return "makefile";
        }
        int dot = fileName.lastIndexOf('.');
        if (dot < 0) {
            return "text";
        }
        return fileName.substring(dot + 1);
    }
}
