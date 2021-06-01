import * as AWS from 'aws-sdk';

import { config } from "../constants/AWSConfig";

export const fetchReadingsData = async (activeRoom) => {
    AWS.config.update(config);
    const client = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: "ferqair_db",
        FilterExpression: "#rid = :room",
        ExpressionAttributeNames: {
            "#rid": "ROOM_ID",
        },
        ExpressionAttributeValues: {
            ":room": activeRoom
        }
    };

    /*const end_timestamp = new Date().getTime();
    const start_timestamp = new Date(new Date().getTime() - (7 * 24 * 3600 * 1000)).getTime();

    const params = {
        TableName: "ferqair_db",
        FilterExpression: "#room_id = :room and #timestamp_value between :start_timestamp and :end_timestamp",
        ExpressionAttributeNames: {
            "#room_id": "ROOM_ID",
            "#timestamp_value": "TIMESTAMP"
        },
        ExpressionAttributeValues: {
            ":room": activeRoom,
            ":start_timestamp": start_timestamp,
            ":end_timestamp": end_timestamp
        }
    };*/

    try {
        const response = await client.scan(params).promise();
        return response;
    } catch (error) {
        console.log(error);
        return null;
    } finally {
        // finally
    }
}