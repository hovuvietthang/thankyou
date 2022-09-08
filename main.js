
$("#btnLogin").click(
    function (){
        let userName = document.getElementById("userName").value;
        let passWord = document.getElementById("passWord").value;
        console.log(userName);
        console.log (passWord)
        if (userName == "nguyenquangthuong" && passWord == "nguyenquangthuong"){
            $("#btnLogin").attr (
                "data-bs-target" , "#offcanvas-replace-id"
            )
            console.log($("#btnLogin"))
            $("#field-alert").text(
                ""
            )
            // quang thuong 1
            var thanksAPI = "https://sheetdb.io/api/v1/ay5l3ky98mjzi";
fetch(thanksAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (thanks) {
    $("#letter-inf-client").text(thanks[0].letter_inf_client)
    $("#letter-inf-address").text(thanks[0].letter_inf_address)
    $("#letter-inf-phone").text(thanks[0].letter_inf_phone)
    $("#letter-content-p").text(thanks[0].letter_content_p)
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[0].image1
        }
    )
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[0].image1
        }
    )
    $("#carousel-item-images-2").attr(
        {
            "src" : thanks[0].image2
        }
    )
    $("#carousel-item-images-3").attr(
        {
            "src" : thanks[0].image3
        }
    )
    $("#carousel-item-images-4").attr(
        {
            "src" : thanks[0].image4
        }
    )
    $("#carousel-item-images-5").attr(
        {
            "src" : thanks[0].image5
        }
    )
    $("#carousel-item-images-6").attr(
        {
            "src" : thanks[0].image6
        }
    )
   
    

  }
  )
        console.log("Quang Thượng")
        } else if(userName == "huynhthikimngoc" && passWord == "huynhthikimngoc")
        {
            $("#btnLogin").attr (
                "data-bs-target" , "#offcanvas-replace-id"
            )
            console.log($("#btnLogin"))
            $("#field-alert").text(
                ""
            )
            // quang thuong 1
            // kim ngoc 2
            var thanksAPI = "https://sheetdb.io/api/v1/ay5l3ky98mjzi";
fetch(thanksAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (thanks) {
    $("#letter-inf-client").text(thanks[1].letter_inf_client)
    $("#letter-inf-address").text(thanks[1].letter_inf_address)
    $("#letter-inf-phone").text(thanks[1].letter_inf_phone)
    $("#letter-content-p").text(thanks[1].letter_content_p)
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[1].image1
        }
    )
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[1].image1
        }
    )
    $("#carousel-item-images-2").attr(
        {
            "src" : thanks[1].image2
        }
    )
    $("#carousel-item-images-3").attr(
        {
            "src" : thanks[1].image3
        }
    )
    $("#carousel-item-images-4").attr(
        {
            "src" : thanks[1].image4
        }
    )
    $("#carousel-item-images-5").attr(
        {
            "src" : thanks[1].image5
        }
    )
    $("#carousel-item-images-6").attr(
        {
            "src" : thanks[1].image6
        }
    )
   
    

  }
  )
            console.log("Kim Ngọc")
        } else if (userName == "tranphamhongduc" && passWord == "tranphamhongduc"){
            $("#btnLogin").attr (
                "data-bs-target" , "#offcanvas-replace-id"
            )
            console.log($("#btnLogin"))
            $("#field-alert").text(
                ""
            )
            // kim ngoc 2
            // hong duc 3
            var thanksAPI = "https://sheetdb.io/api/v1/ay5l3ky98mjzi";
fetch(thanksAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (thanks) {
    $("#letter-inf-client").text(thanks[2].letter_inf_client)
    $("#letter-inf-address").text(thanks[2].letter_inf_address)
    $("#letter-inf-phone").text(thanks[2].letter_inf_phone)
    $("#letter-content-p").text(thanks[2].letter_content_p)
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[2].image1
        }
    )
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[2].image1
        }
    )
    $("#carousel-item-images-2").attr(
        {
            "src" : thanks[2].image2
        }
    )
    $("#carousel-item-images-3").attr(
        {
            "src" : thanks[2].image3
        }
    )
    $("#carousel-item-images-4").attr(
        {
            "src" : thanks[2].image4
        }
    )
    $("#carousel-item-images-5").attr(
        {
            "src" : thanks[2].image5
        }
    )
    $("#carousel-item-images-6").attr(
        {
            "src" : thanks[2].image6
        }
    )
   
    

  }
  )
            console.log("Hồng Đức")
            // hong duc 3
        } else if (userName == "nguyenthianhtuyet" && passWord == "nguyenthianhtuyet"){
            $("#btnLogin").attr (
                "data-bs-target" , "#offcanvas-replace-id"
            )
            console.log($("#btnLogin"))
            $("#field-alert").text(
                ""
            )
            // anh tuyet 4
            var thanksAPI = "https://sheetdb.io/api/v1/ay5l3ky98mjzi";
fetch(thanksAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (thanks) {
    $("#letter-inf-client").text(thanks[3].letter_inf_client)
    $("#letter-inf-address").text(thanks[3].letter_inf_address)
    $("#letter-inf-phone").text(thanks[3].letter_inf_phone)
    $("#letter-content-p").text(thanks[3].letter_content_p)
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[3].image1
        }
    )
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[3].image1
        }
    )
    $("#carousel-item-images-2").attr(
        {
            "src" : thanks[3].image2
        }
    )
    $("#carousel-item-images-3").attr(
        {
            "src" : thanks[3].image3
        }
    )
    $("#carousel-item-images-4").attr(
        {
            "src" : thanks[3].image4
        }
    )
    $("#carousel-item-images-5").attr(
        {
            "src" : thanks[3].image5
        }
    )
    $("#carousel-item-images-6").attr(
        {
            "src" : thanks[3].image6
        }
    )
   
    

  }
  )
            console.log("Ánh Tuyết")
        // anh tuyet 4
        } else if (userName == "phamvanvien" && passWord == "phamvanvien"){
            $("#btnLogin").attr (
                "data-bs-target" , "#offcanvas-replace-id"
            )
            console.log($("#btnLogin"))
            $("#field-alert").text(
                ""
            )
            // Van Vien 5
            var thanksAPI = "https://sheetdb.io/api/v1/ay5l3ky98mjzi";
fetch(thanksAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (thanks) {
    $("#letter-inf-client").text(thanks[4].letter_inf_client)
    $("#letter-inf-address").text(thanks[4].letter_inf_address)
    $("#letter-inf-phone").text(thanks[4].letter_inf_phone)
    $("#letter-content-p").text(thanks[4].letter_content_p)
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[4].image1
        }
    )
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[4].image1
        }
    )
    $("#carousel-item-images-2").attr(
        {
            "src" : thanks[4].image2
        }
    )
    $("#carousel-item-images-3").attr(
        {
            "src" : thanks[4].image3
        }
    )
    $("#carousel-item-images-4").attr(
        {
            "src" : thanks[4].image4
        }
    )
    $("#carousel-item-images-5").attr(
        {
            "src" : thanks[4].image5
        }
    )
    $("#carousel-item-images-6").attr(
        {
            "src" : thanks[4].image6
        }
    )
   
    

  }
  )
            console.log("Văn Viên")
            // Văn Viên 5
        } 
        else if (userName == "team97" && passWord == "team97"){
            $("#btnLogin").attr (
                "data-bs-target" , "#offcanvas-replace-id"
            )
            console.log($("#btnLogin"))
            $("#field-alert").text(
                ""
            )
            // Team 97 6
            var thanksAPI = "https://sheetdb.io/api/v1/ay5l3ky98mjzi";
fetch(thanksAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (thanks) {
    $("#letter-inf-client").text(thanks[5].letter_inf_client)
    $("#letter-inf-address").text(thanks[5].letter_inf_address)
    $("#letter-inf-phone").text(thanks[5].letter_inf_phone)
    $("#letter-content-p").text(thanks[5].letter_content_p)
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[5].image1
        }
    )
    $("#carousel-item-images-1").attr(
        {
            "src" : thanks[5].image1
        }
    )
    $("#carousel-item-images-2").attr(
        {
            "src" : thanks[5].image2
        }
    )
    $("#carousel-item-images-3").attr(
        {
            "src" : thanks[5].image3
        }
    )
    $("#carousel-item-images-4").attr(
        {
            "src" : thanks[5].image4
        }
    )
    $("#carousel-item-images-5").attr(
        {
            "src" : thanks[5].image5
        }
    )
    $("#carousel-item-images-6").attr(
        {
            "src" : thanks[5].image6
        }
    )
   
    

  }
  )
            console.log("team97")
            // team 97 6
        } 
        
        else
        {
            $("#btnLogin").attr (
                "data-bs-target" , "none"
            )
            $("#field-alert").text(
                "USERNAME VÀ PASSWORD KHÔNG ĐÚNG"
            )
            console.log("SAI TÀI KHOẢN VÀ MẬT KHẨU")
        }
    }
)