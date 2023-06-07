<template>
     <div class="container main p-0">
        <div class="container p-0">
            <div class="card mt-0 p-0" id="card-item" style="width: 18rem;">

                <slot name="pictur">

                </slot>
                <div class="card-body">
                    <slot name="names">

                    </slot>
                    <slot name="type">

                    </slot>
                    <slot name="content">

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'card-item',
  }


</script>

<style scoped>
#card-item img{
    width: 10rem;
}

</style>
