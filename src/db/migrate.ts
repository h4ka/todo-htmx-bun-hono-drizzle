import {migrate} from 'drizzle-orm/bun-sqlite/migrator';

import {db} from "./index";

(async () => {
    console.log('Starting migrations');
    await migrate(db, {migrationsFolder: 'drizzle'});
    console.log('Migrations complete.');
})();