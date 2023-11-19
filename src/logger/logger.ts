import { name } from './../meta';
import dotenv from 'dotenv';
dotenv.config();

import { Level, Logger, processors } from 'tripitaka';
import { sumoLogicProcessor } from 'tripitaka-sumologic';
import buildTransports from './build-transports';

const { NODE_ENV, SUMO_URL, SOURCE_NAME, LOG_LEVEL } = process.env;
const logLevel = Level.lookup(LOG_LEVEL?.toUpperCase() as string);

const logger = new Logger({
    level: logLevel,
    processors: [processors.timestamp(), sumoLogicProcessor()],
    transports: buildTransports(logLevel, NODE_ENV as string, SUMO_URL, SOURCE_NAME || name()),
});

export default logger;
