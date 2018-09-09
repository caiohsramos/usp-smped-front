import express from "express";
import path from "path";

import routes from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "../public/")));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

const port = process.env.PORT || '5000';

routes(app);

app.listen(port, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log(`---------------------------------------------------------------
			\n\n\n\nServer online - Listening to port ${port}\n\n\n\n---------------------------------------------------------------`);
	}
});
