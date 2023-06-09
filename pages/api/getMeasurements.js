import { Client } from 'pg';

export default async (req, res) => {
    const client = new Client({
        host: "proyectosanti.postgres.database.azure.com",
        user: "postgres",
        port: 5432,
        password: "(CIMB2023)",
        database: "postgres"
    });

    await client.connect();
    try {
        const result = await client.query('Select * from measurements');
        const rowCount = result.rowCount;
        const lastRow = result.rows[rowCount - 1];
        res.status(200).json(lastRow);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    } finally {
        await client.end();
    }
};
