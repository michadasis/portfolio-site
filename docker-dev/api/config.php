<?php
// Local dev credentials — matches docker-compose.yml environment vars.
// Host is "db", the docker-compose service name, not "localhost",
// since this runs inside the api container talking to the db container.

$DB_HOST = 'db';
$DB_NAME = 'michadas_database';
$DB_USER = 'devuser';
$DB_PASS = 'devpass';
