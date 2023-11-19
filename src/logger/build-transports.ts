import { Level, TransportFactory, transports } from 'tripitaka';
import { sumoLogicTransport } from 'tripitaka-sumologic';
import { v4 } from 'uuid';

// eslint-disable-next-line no-console
const onError = (error: any) => console.log(`Sumo Error! ${error}`);

const buildTransports = (logLevel: Level, env: string, sumoEndPoint?: string, sourceName?: string): Array<TransportFactory> => {
    const ts: Array<TransportFactory> = [transports.stream({ threshold: logLevel })];

    if (env === 'production' && sumoEndPoint) {
        ts.push(
            sumoLogicTransport(
                {
                    endpoint: sumoEndPoint,
                    sourceName,
                    sessionKey: v4(),
                    onError,
                },
                { threshold: logLevel }
            )
        );
    }

    return ts;
};

export default buildTransports;
export { onError };
