
$("#btnLogin").click(
    function (){
        let userName = document.getElementById("userName").value;
        let passWord = document.getElementById("passWord").value;
        console.log(userName);
        console.log (passWord)
        if (userName == "1" && passWord == "1"){
            $("#btnLogin").attr (
                "data-bs-target" , "#view-quangThuong"
            )
            console.log($("#btnLogin"))
            $("#field-alert").text(
                ""
            )
        } else {
            $("#btnLogin").attr (
                "data-bs-target" , "#"
            )
            $("#field-alert").text(
                "USERNAME VÀ PASSWORD KHÔNG ĐÚNG"
            )
        }
    }
)