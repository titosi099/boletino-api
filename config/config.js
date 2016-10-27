export default {
  database: 'dev_boletino',
  username: 'postgres',
  password: 'rea123',
  params: {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
  jwtSecret: 'B0L3T1n0',
  jwtSession: { session: false },
};
