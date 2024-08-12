import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();

  const postgresVersionQuery = await database.query("SHOW server_version;");
  const postgresVersion = postgresVersionQuery.rows[0].server_version;

  const maxConnectionsQuery = await database.query("SHOW max_connections;");
  const maxConnections = maxConnectionsQuery.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const openedConnectionsQuery = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const openedConnections = openedConnectionsQuery.rows[0].count;

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: postgresVersion,
        max_connections: parseInt(maxConnections),
        opened_connections: openedConnections,
      },
    },
  });
}

export default status;
