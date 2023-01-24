enum NODE_ENV_TYPE {
    DEVELOPMENT = 'development',
    TEST = 'test',
    PRODUCTION = 'production'
}

const config: {
    SERVER_PORT: number;
    DATABASE_URL: string;
    ORIGIN: string;
    NODE_ENV: NODE_ENV_TYPE
} = {
    SERVER_PORT: parseInt(process.env.SERVER_PORT as string, 10) || 8000,
    ORIGIN: (process.env.ORIGIN as string) || 'http://localhost:3000',
    DATABASE_URL: (process.env.DATABASE_URL as string) || 'MISSING_DB_URI',
    NODE_ENV: (process.env.NODE_ENV as NODE_ENV_TYPE) || NODE_ENV_TYPE.DEVELOPMENT 
}

export { config };
