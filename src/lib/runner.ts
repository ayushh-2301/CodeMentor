
export interface PistonResponse {
    run: {
        stdout: string;
        stderr: string;
        code: number;
        signal: string | null;
        output: string;
    };
    language: string;
    version: string;
}

export async function executeCode(language: string, code: string, args: string[] = []): Promise<PistonResponse> {
    // Piston public API
    const endpoint = "https://emkc.org/api/v2/piston/execute";

    // Map common languages to Piston runtime names/versions
    const runtimeMap: Record<string, { language: string, version: string }> = {
        "javascript": { language: "javascript", version: "18.15.0" },
        "typescript": { language: "typescript", version: "5.0.3" },
        "python": { language: "python", version: "3.10.0" },
        "java": { language: "java", version: "15.0.2" },
        "cpp": { language: "c++", version: "10.2.0" },
    };

    const runtime = runtimeMap[language] || { language, version: "*" };

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            language: runtime.language,
            version: runtime.version,
            files: [
                {
                    name: "main",
                    content: code,
                },
            ],
            args: args,
        }),
    });

    if (!response.ok) {
        throw new Error(\`Piston API execution failed: \${response.statusText}\`);
  }

  return response.json();
}
