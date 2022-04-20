echo "------- CheeseburgerIM -------"

date=`date +%Y/%m/%d`
echo $date

git add .
git commit -m "${date}"
git push

echo $date

echo "------- ---Finished--- -------"