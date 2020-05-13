# serverless-test
Instruction how to deploy nodejs to AWS Lambda

The dependencies are needed to be installed:

npm install serverless --save-dev
npm install aws-serverless-express --save


Install AWS CLI(https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html)

After that you need to configure aws cli:

aws configure

You will be asked to provide following values:

- AWS Access Key ID
- AWS Secret Access Key

You can find them in the ‘My Security Credentials’ section, after logging into your AWS account:


To deploy new version to cloud

npm run deploynpm run deploy