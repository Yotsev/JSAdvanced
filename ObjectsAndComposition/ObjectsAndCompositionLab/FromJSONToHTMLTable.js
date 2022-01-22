function table(input) {
    let JSONResult = JSON.parse(input);
    let finalArray = ['<table>'];
    finalArray.push(makeHeaders(JSONResult));
    JSONResult.forEach(el => finalArray.push(makeRecors(el)));
    finalArray.push('</table>')
    console.log(finalArray.join('\n'));

    function makeHeaders(input) {
        let result = '  <tr>';
        Object.keys(input[0]).forEach(key => {
            result += `<th>${escapeFunc(key)}</th>`
        });

        result += '</tr>';
        return result;
    }

    function makeRecors(records) {
        let result = '  <tr>';
        Object.values(records).forEach(rec => {
            result += `<td>${escapeFunc(rec)}</td>`;
        });

        result+='</tr>';

        return result;
    }

    function escapeFunc(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
table(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)