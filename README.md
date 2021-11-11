# Serverless Framework AWS Boilerplate

## Summary
This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework. The deployed function does not include any event definitions as well as any kind of persistence (database). For more advanced configurations check out the [examples repo](https://github.com/serverless/examples/) which includes integrations with SQS, DynamoDB or examples of functions that are triggered in `cron`-like manner. For details about configuration of specific `events`, please refer to our [documentation](https://www.serverless.com/framework/docs/providers/aws/events/).

## Install Serverless
npm install -g serverless

## Upgrade Serverless
npm update -g serverless

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

Deploy to specific stage:

```
$ serverless deploy --stage prod
```

After running deploy, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service serverless-boilerplate.zip file to S3 (1.59 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: serverless-boilerplate
stage: dev
region: us-east-1
stack: serverless-boilerplate-dev
resources: 12
api keys:
  None
endpoints:
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/hello
functions:
  hello: serverless-boilerplate-dev-hello
layers:
  None
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function hello
```

or 

```bash
serverless invoke --stage prod --function hello
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "headers": {
        "x-custom-header": "My Header Value",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    },
    "body": "{\"message\":\"Hello World!\"}"
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
    "statusCode": 200,
    "headers": {
        "x-custom-header": "My Header Value",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    },
    "body": "{\"message\":\"Hello World!\"}"
}
```

### Dashboard

Run `serverless login` to have CLI log into default browser, then run `serverless` to configure the app. Once done, deploy the app and it will show up in your Serverless Dashboard.
