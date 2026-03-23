
let a_str = prompt("String A");
let b_str = prompt("String B");
let c_str = prompt("String C");
const blender = function (str1, str2, str3) {
    if ((a_str.length == b_str.length) && (a_str.length == b_str.length)) {
        let result = "";
        for (let i = 0; i < str1.length; i++) {
            result += str1[i] + ` fra str1\n`;
            result += str2[i] + ` fra str2\n`;
            result += str3[i] + ` fra str3\n`;
        }
        return result;
    } else {
        return "Fejl: Strengene skal have samme længde!"
    }
}
let blanding = blender(a_str, b_str, c_str);
console.log(blanding)