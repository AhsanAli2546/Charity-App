<template>
    <DefaultLayout>
        <section class="w-100 container py-5 my-5">
            <div class="w-100 row">
                <div class="col-lg-8">

                    <h2 class="font-playfair ch-text-dark">Donating Poor People.</h2>
                    <FundraiserDonateImgCardVue />
                    <ProgressBarUtilVue/>
                </div>
            </div>

        </section>
    </DefaultLayout>
</template>

<script>
import FundraiserDonateImgCardVue from '../components/Utils/FundraiserDonateImgCard.vue';
import ProgressBarUtilVue from '../components/Utils/ProgressBarUtil.vue';

export default{
    name:'DonateView',
    components:{
        FundraiserDonateImgCardVue,
        ProgressBarUtilVue
    }
}
</script>
