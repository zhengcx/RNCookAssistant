#!/bin/sh

if [ $# != 1 ] ; then

	echo "usage: $0 iconfont.svg(your svg file name)  "
	exit
fi

#currentpath
currentpath=$(cd `dirname $0`; pwd)
#parent path of currentpath
basepath=${currentpath%/*}

#OutputFile path,you can customize your path
OutputFileName=`echo ${basepath}/base/widget/cxicon/iconfont.json`

mapper=` awk '{ if($0 ~ /glyph-name/) print $0;  if($0 ~ /unicode/)  print $0"|split|" }'  $1| tr '[:upper:]' '[:lower:]'| awk '{print $0}'  RS='\='| tr "\n\"&#;" " "| awk  '{ if ($1!="split"&&$1!=""){ printf ("\""$3"\":"); printf ($5","); print "\r " }}' RS="|split|" | sed "s/-/_/g"`

rm $OutputFileName
echo "{" >> $OutputFileName
echo $mapper >> $OutputFileName
echo "}" >> $OutputFileName

#usage:
#1 cd jscode/script/
#2 ./iconfont_mapper.sh svg_file_path
