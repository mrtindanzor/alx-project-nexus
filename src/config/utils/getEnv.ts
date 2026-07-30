type GetEnvProps = {
  name: string;
  description?: string;
  required?: boolean;
  isStatic?: boolean;
};

export function getEnv(props: {
  name: string;
  required?: true;
  description?: string;
  isStatic?: boolean;
}): string;
export function getEnv(props: {
  name: string;
  required: false;
  description?: string;
  isStatic?: boolean;
}): string | undefined;

export function getEnv({ name, required, description = "" }: GetEnvProps) {
  const value = process.env[name.trim()];

  if (required !== false && !value)
    throw Error(
      `"${name} ${description}" : is a required environment variable but not defined!`,
    );

  return value;
}
