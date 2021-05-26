import * as AWS from 'aws-sdk';

import { config } from "../constants/AWSConfig";

export const fetchReadingsData = async (activeRoom) => {
    AWS.config.update(config);

    const client = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: "ferqair_db",
        FilterExpression: "#rid = :start_yr",
        ExpressionAttributeNames: {
            "#rid": "ROOM_ID",
        },
        ExpressionAttributeValues: {
            ":start_yr": activeRoom
        }
    };

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