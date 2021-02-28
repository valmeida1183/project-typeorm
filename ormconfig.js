console.log('------>', process.env.DATABASE_URL);
console.log('------>', process.env.ENTITIES);
console.log('------>', process.env.MIGRATIONS);
console.log('------>', process.env.PORT);

module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [process.env.ENTITIES],
    migrations: [process.env.MIGRATIONS],
    cli: {
        migrationsDir: ['src/migrations/'],
        entitiesDir: 'src/models',
    },
    /* ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    }, */
};
