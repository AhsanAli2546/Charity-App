<template>
    <DefaultLayout>
        <section class="w-100 container py-5 my-5">
            <div class="w-100 row">
                <div class="col-lg-8">

                    <h2 class="font-playfair ch-text-dark">Donating Poor People.</h2>
                    <FundraiserDonateImgCardVue />
                    <div class="container ch-bg-primary-light p-3 mt-3">

                        <ProgressBarUtilVue title="Donatone" percentage="80" />
                    </div>

                    <p class="font-playfair ch-text-dark h4 mt-5">
                        Donate for poor peoples treatment and medicine.
                    </p>
                    <p class="font-montserrat ch-text-coal mt-3">
                        Flyingfish Kafue pike cow shark California smoothtongue golden loach temperate ocean-bass gulper
Sailbearer kanyu porcupinefish Kafue pike opah sunfish gudgeon boga Asiatic glassfish tadpole fish!
Alewife, poacher airbreathing catfish; zebra tilapia northern pearleye naked-back knifefish pupfish
dojo loach, “snake mackerel bonytail chub arapaima horsefish weasel shark.”
                    </p>
                    <p class="font-montserrat ch-text-coal mt-3">
                        Flyingfish Kafue pike cow shark California smoothtongue golden loach temperate ocean-bass gulper
Sailbearer kanyu porcupinefish Kafue pike opah sunfish gudgeon boga Asiatic glassfish tadpole fish!
Alewife, poacher airbreathing catfish; zebra tilapia northern pearleye naked-back knifefish pupfish
dojo loach, “snake mackerel bonytail chub arapaima horsefish weasel shark.”
                    </p>
                    
                </div>
            </div>

        </section>
    </DefaultLayout>
</template>

<script>
import FundraiserDonateImgCardVue from '../components/Utils/FundraiserDonateImgCard.vue';
import ProgressBarUtilVue from '../components/Utils/controls/ProgressBarUtil.vue';

export default{
    name:'DonateView',
    components:{
        FundraiserDonateImgCardVue,
        ProgressBarUtilVue
    }
}
</script>
