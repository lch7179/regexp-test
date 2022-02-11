const str = `
010-1234-5678
lch8475@gmail.com
https://www.aaa.aaaa.com
the quick The Slow...
abbcccdddd
http://www.sss.sss.com
가히가소_매야 시아
`

console.log(
  str.match(/(?<=\@).{1,}/g)
)