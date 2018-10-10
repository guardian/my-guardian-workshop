#!/bin/sh

# Here you need keys for an aws IAM user with ListBucket,PutObject and PutObjectAcl permissions for the developer playground account
# WARNING: this is included as an example but you should not put your AWS credentials in this file - better to just export them
# to your terminal, to avoid accidentally pushing them to github

export AWS_ACCESS_KEY_ID=<aws-access-key>
export AWS_SECRET_ACCESS_KEY=<aws-secret-key>

BUCKET_NAME=ada-lovelace-day

if [ $# -ne 1 ]
then
    echo "Enter your full name all lowercase with no spaces (you can use hyphens instead) after upload-site.sh, for example: `./upload-site.sh elonmusk` "
    exit
fi

# Here we have hard coded the location of the aws cli on the guardian education centre machines as it is not in the path
# on most machines with the aws cli installed you should be able to get away with just 'aws'
/Library/Frameworks/Python.framework/Versions/2.7/bin/aws s3 sync . s3://ada-lovelace-day/$1 --exclude '*' --include '*.html' --include '*.js' --include '*.css' --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers

if [ $? -ne 0 ]
then
   echo "Upload failed"
else
   echo "-------------------------------"
   echo "Your site is at http://$BUCKET_NAME.s3-website-eu-west-1.amazonaws.com/$1"
fi
