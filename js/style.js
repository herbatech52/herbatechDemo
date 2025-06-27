$(document).ready(function () {
    // --------------------------------------slider----------------------------
    $('.s-slider .slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1
                // 
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // --------------------------------nut btn---------------------------------------
    $('.b_conten_1 .btn').click(function () {
        $(this).parent().find('.nav-conten').slideToggle(400);
        $(this).parent().siblings().find('.nav-conten').slideUp(400);
        $(this).parent().toggleClass("intro");
    })

    // ----------------------------------mobile bar-------------------------------------
    $('.s-bars').click(function () {
        $('.s-header .s-navation').toggleClass("realy");
    })

    $('.s-header .s-navation ul > li.even > a').click(function (e) {
        e.preventDefault();
    })

    $('.conten-1 .card-3 .to-send').click(function () {
        $name = $('.name').val();
        $phone = $('.phone').val();
        $email = $('.email').val();
        $coment = $('.coment').val();

        if ($name == "")
            $('.error').text('Chưa nhập đủ tên');

        if ($phone == "")
            $('.error').text('Chưa nhập đủ số điẹn thoại');

        if ($email == "")
            $('.error').text('Chưa nhập đủ Email');

        if ($coment == "")
            $('.error').text('Chưa nhập đủ nội dung');

        if ($name == "" && $phone == "" && $email == "" && $coment == "")
            $('.error').text('Chưa đủ thông tin');
    })

});

    // Dự án tiêu biểu
    document.addEventListener('DOMContentLoaded', function () {
        showproject('all');
    })
    function showproject(address) {
        document.getElementById('project-details').innerHTML = '';
        switch (address) {
            case "all":
                document.getElementById(
                    "project-details"
                ).innerHTML = ` <div class="row s-row" >
                <div class="col-md-5 pd-left">
                <div class="card-18">
                    <div class="ht-ratio--100 pd-bottom-100">
                        <img src="./img/project/all/photo_01_all.jpg" alt="" class="ht-ratio__img" alt='ảnh lỗi'>
                    </div>
                    <div class="s-desc-18 action">
                        <div class="b_desc_1">
                            <div class="b-title-18">Trạm Sài Gòn</div>
                            <p>THÔNG TIN CÔNG TRÌNH […]</p>
                        </div>
                        <div class="b_desc_2 b_desc_2-2">
                            <i class="icon"><i class="fa-solid fa-angle-right"></i></i>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card-18">
                            <div class="ht-ratio--75">
                                <img src="./img/project/all/photo_02_all.jpg" alt="" class="ht-ratio__img" alt='ảnh lỗi'>
                            </div>
                            <div class="s-desc-18">
                                <div class="b_desc_1">
                                    <div class="b-title-18">Trạm Hà Nội</div>
                                    <p>THÔNG TIN CÔNG TRÌNH […]</p>
                                </div>
                                <div class="b_desc_2">
                                    <i class="icon"><i class="fa-solid fa-angle-right"></i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-18">
                            <div class="ht-ratio--75">
                                <img src="./img/project/all/photo_03_all.jpg" alt="" class="ht-ratio__img" alt='ảnh lỗi'>
                            </div>
                            <div class="s-desc-18">
                                <div class="b_desc_1">
                                    <div class="b-title-18">Trạm Bình Định</div>
                                    <p>THÔNG TIN CÔNG TRÌNH […]</p>
                                </div>
                                <div class="b_desc_2">
                                    <i class="icon"><i class="fa-solid fa-angle-right"></i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card-18">
                            <div class="ht-ratio--75">
                                <img src="./img/project/all/photo_04_all.jpg" alt="" class="ht-ratio__img" alt='ảnh lỗi'>
                            </div>
                            <div class="s-desc-18">
                                <div class="b_desc_1">
                                    <div class="b-title-18">Trạm Đồng Nai</div>
                                    <p>THÔNG TIN CÔNG TRÌNH […]</p>
                                </div>
                                <div class="b_desc_2">
                                    <i class="icon"><i class="fa-solid fa-angle-right"></i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-18">
                            <div class="ht-ratio--75">
                                <img src="./img/project/all/photo_05_all.jpg" alt="" class="ht-ratio__img" alt='ảnh lỗi'>
                            </div>
                            <div class="s-desc-18">
                                <div class="b_desc_1">
                                    <div class="b-title-18">Trạm Phú Yên</div>
                                    <p>THÔNG TIN CÔNG TRÌNH […]</p>
                                </div>
                                <div class="b_desc_2">
                                    <i class="icon"><i class="fa-solid fa-angle-right"></i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;`;
                break;
            case "sai-gon":
                document.getElementById("project-details").innerHTML =
                    `<div class="col-md-4">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card-18 pd-bottom">
                            <div class="ht-ratio--75">
                                <img src="./img/project/saigon/photo_01_saigon.jpg" alt="" class="ht-ratio__img">
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card-18 pd-bottom">
                            <div class="ht-ratio--75">
                                <img src="./img/project/saigon/photo_02_saigon.jpg" alt="" class="ht-ratio__img">
                            </div>
                        
                        </div>
                    </div>
                
                </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card-18 pd-bottom">
                            <div class="ht-ratio--75">
                                <img src="./img/project/saigon/photo_03_saigon.jpg" alt="" class="ht-ratio__img">
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card-18 pd-bottom">
                            <div class="ht-ratio--75">
                                <img src="./img/project/saigon/photo_04_saigon.jpg" alt="" class="ht-ratio__img">
                            </div>
                        
                        </div>
                    </div>
                
                </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card-18 pd-bottom">
                            <div class="ht-ratio--75">
                                <img src="./img/project/saigon/photo_05_saigon.jpg" alt="" class="ht-ratio__img">
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card-18 pd-bottom">
                            <div class="ht-ratio--75">
                                <img src="./img/project/saigon/photo_06_saigon.jpg" alt="" class="ht-ratio__img">
                            </div>                               
                        </div>
                    </div>
                
                </div>
            </div>`;
                break;
            case "ha-noi":
                document.getElementById("project-details").innerHTML =
                    `<div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/hanoi/photo_01_hanoi.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/hanoi/photo_02_hanoi.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/hanoi/photo_03_hanoi.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/hanoi/photo_04_hanoi.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/hanoi/photo_05_hanoi.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/hanoi/photo_06_hanoi.jpg" alt="" class="ht-ratio__img">
                                </div>                               
                            </div>
                        </div>
                    
                    </div>
                </div>`;
                break;
            case "binh-dinh":
                document.getElementById("project-details").innerHTML =
                    `<div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/binhdinh/photo_01_binhdinh.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/binhdinh/photo_02_binhdinh.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/binhdinh/photo_03_binhdinh.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/binhdinh/photo_04_binhdinh.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/binhdinh/photo_05_binhdinh.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/binhdinh/photo_06_binhdinh.jpg" alt="" class="ht-ratio__img">
                                </div>                               
                            </div>
                        </div>
                    
                    </div>
                </div>`;
                break;
            case "dong-nai":
                document.getElementById("project-details").innerHTML =
                    `<div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/dongnai/photo_01_dongnai.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/dongnai/photo_02_dongnai.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/dongnai/photo_03_dongnai.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/dongnai/photo_04_dongnai.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/dongnai/photo_05_dongnai.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/dongnai/photo_06_dongnai.jpg" alt="" class="ht-ratio__img">
                                </div>                               
                            </div>
                        </div>
                    
                    </div>
                </div>`;
                break;
            case "phu-yen":
                document.getElementById("project-details").innerHTML =
                    `<div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/phuyen/photo_01_phuyen.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/phuyen/photo_02_phuyen.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/phuyen/photo_03_phuyen.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/phuyen/photo_04_phuyen.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/phuyen/photo_05_phuyen.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/phuyen/photo_06_phuyen.jpg" alt="" class="ht-ratio__img">
                                </div>                               
                            </div>
                        </div>
                    
                    </div>
                </div>`;
                break;
            case "can-tho":
                document.getElementById("project-details").innerHTML =
                    `<div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/cantho/photo_01_cantho.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/cantho/photo_02_cantho.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/cantho/photo_03_cantho.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/cantho/photo_04_cantho.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/cantho/photo_05_cantho.jpg" alt="" class="ht-ratio__img">
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-18 pd-bottom">
                                <div class="ht-ratio--75">
                                    <img src="./img/project/cantho/photo_06_cantho.jpg" alt="" class="ht-ratio__img">
                                </div>                               
                            </div>
                        </div>
                    
                    </div>
                </div>`;
                break;
            default:
                break;
        }
        document.getElementById("project-details").classList.remove("hidden");
    }



