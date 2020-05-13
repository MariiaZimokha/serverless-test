# serverless-test
Instruction how to deploy nodejs to AWS Lambda

**Live demo:** https://etvqss15w8.execute-api.us-east-1.amazonaws.com/production

The dependencies are needed to be installed:

```javascript
npm install serverless --save-dev
npm install aws-serverless-express --save
```

Install AWS CLI(https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html)

After that you need to configure aws cli:

```javascript
aws configure
```

You will be asked to provide following values:

- AWS Access Key ID
- AWS Secret Access Key

You can find them in the ‘My Security Credentials’ section, after logging into your AWS account:

![aws](/assets/aws.png?raw=true)

To deploy new version to cloud

```javascript
npm run deploy
```
