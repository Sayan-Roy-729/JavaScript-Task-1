
$(document).ready(function(){

    window.navigator.geolocation.getCurrentPosition(function(data){
        let latitude = data['coords']['latitude'];
        let longitude = data['coords']['longitude'];
        // console.log(latitude, longitude);

        $.ajax({
                    url: `https://api.opencagedata.com/geocode/v1/json?key=3cd2fe68004344e6ba738ad965328576&q=` + latitude + `%2C+` + longitude + `&pretty=1&no_annotations=1`,
                    success: function(data){
                        if(data["status"]["code"] == 200) {
                            let city = data["results"][0]["components"]["county"];
                            let district = data["results"][0]["components"]["state_district"];
                            let state = data["results"][0]["components"]["state"];
                            let country = data["results"][0]["components"]["country"];
                            let continent = data["results"][0]["components"]["continent"];

                            
                            $('#state').html(`<p class="vericaltext">Click</p><img src = "https://source.unsplash.com/1600x900/?` + state + `,monument"><p class="vericaltext">` + state + `</p>`);


                            $('#country').html(`<p class="vericaltext">Click</p><img src = "https://source.unsplash.com/1600x900/?` + country + `,monument"><p class="vericaltext">` + country + `</p>`);

                            $('#continent').html(`<p class="vericaltext">Click</p><img src = "https://source.unsplash.com/1600x900/?` + continent + `,monument"><p class="vericaltext">` + continent + `</p>`);

                            $('#adderss').html(`<h3>Your Address: ` + city + `, ` + district + `, ` + state + `, ` + country + `, ` + continent + `</h3>`)



                        } else {
                            console.log("Error within sucess");
                        }
                    },
                    error: function(){
                        console.log("Some error occuried");
                    },

                });


                
        });
    
})



// https://source.unsplash.com/1600x900/?india,monument