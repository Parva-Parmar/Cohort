import { Client } from "pg";

const pgClient = new Client("postgresql://neondb_owner:npg_fPX0u3HCxwDS@ep-holy-scene-a1yhknuj-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;")
    console.log(response.rows);
}

main();
