import { DynamoDBClient, GetItemCommand, PutItemCommand, QueryCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({ region: "eu-west-2" });

export const writeToDynamoDB = async (tableName: string, item: Record<string, any>) => {
    const params = {
        TableName: tableName,
        Item: marshall(item),
    };
    console.log(JSON.stringify(params));
    const command = new PutItemCommand(params);
    return await client.send(command);
};

export const readFromDynamoDB = async (tableName: string, key: { [key: string]: any }) => {
    const params = {
        TableName: tableName,
        Key: key,
    };
    const command = new GetItemCommand(params);
    return await client.send(command);
};

export const queryDynamoDB = async (tableName: string, keyConditionExpression: string, expressionAttributeValues: { [key: string]: any }) => {
    const params = {
        TableName: tableName,
        KeyConditionExpression: keyConditionExpression,
        ExpressionAttributeValues: expressionAttributeValues,
    };
    const command = new QueryCommand(params);
    return await client.send(command);
};

export const updateDynamoDB = async (tableName: string, key: { [key: string]: any }, updateExpression: string, expressionAttributeValues: { [key: string]: any }) => {
    const params = {
        TableName: tableName,
        Key: key,
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributeValues,
    };
    const command = new UpdateItemCommand(params);
    return await client.send(command);
};