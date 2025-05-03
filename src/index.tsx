import {Hono} from 'hono'
import Home from './views/pages/home';
import {serveStatic} from "hono/bun";

const app = new Hono()

app.use('/public/scripts/tailwind.min.js', serveStatic({path: './public/scripts/tailwind.min.js'}))
app.use('/public/scripts/htmx.min.js', serveStatic({path: './public/scripts/htmx.min.js'}))

app.get('/', (c) => {
    return c.html(<Home/>);
})

app.notFound((c) => {
    return c.text('Custom 404 Message', 404)
})

export default {
    port: process.env.PORT || 3000,
    fetch: app.fetch,
};
