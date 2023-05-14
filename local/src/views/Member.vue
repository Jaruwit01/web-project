<template >
 
        <div class="container main " id="container-sign-in">
        <div class="text-dark- fw-bold fs-1 text-center mt-4 mb-1">
            Sing In to Camera Box
        </div>
        <div class="card" id="card-sign-in">
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" id="username" class=" form-control" placeholder="Enter your username .....">
                    </div>
                    <div class="mb-3">
                        <label for="pass" class="form-label">Password</label>
                        <input type="password" id="pass" class=" form-control" placeholder="Enter your password .....">
                    </div>
                    <div class="mb-3">
                        <input type="checkbox" id="agree-check" class=" form-check-input me-2">
                        <label for="agree-check" class="form-check-label" id="check-label">remember password</label>
                    </div>
                    <button type="submit" class="btn btn-light rounded-3 border " id="btn-sign-in" formaction="/home/page.html">SIGN IN</button>
                </form>
            </div>
        </div>
        <!-- Button trigger modal -->
        <p class="text-center border border-dark rounded-3 p-2" 
            id="create-box">
            New to Camera Box?<router-link to="/create" class="text-success"> Create account</router-link>
        </p>

        <!-- Modal -->

    </div>

</template>
<script>
export default {
    name: "Member-Page",


}
</script>
<style scoped>
    #card-sign-in, #create-box{
    max-width: 600px;
    margin: 10px;
}

#label-sign-in{
    font-size: 15px;
    font-weight: 250;
    margin: 0 auto;
    margin-bottom: 10px;
}
#container-sign-in{
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#username, #pass {
    max-width:500px;
    height: 2.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 10px;
}
</style>