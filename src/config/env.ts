import * as yup from "yup";

const createEnv = () => {
  const EnvSchema = yup.object().shape({
    API_URL: yup.string().required(),
    ENABLE_API_MOCKING: yup
      .string()
      .oneOf(["true", "false"])
      .transform((value) => value === "true")
      .optional(),
  });

  const envVars = Object.entries(import.meta.env).reduce<
    Record<string, string>
  >((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith("VITE_APP_")) {
      acc[key.replace("VITE_APP_", "")] = value;
    }
    return acc;
  }, {});

  try {
    const parsedEnv = EnvSchema.validateSync(envVars, {
      abortEarly: false,
      strict: true,
    });
    return parsedEnv;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(
        `Invalid env provided.
The following variables are missing or invalid:
${error.inner.map((err) => `- ${err.path}: ${err.errors}`).join("\n")}
`
      );
    } else {
      throw error;
    }
  }
};

export const env = createEnv();
