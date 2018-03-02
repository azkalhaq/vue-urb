<template>
  <div style="min-height:100%">
    <v-toolbar tabs fixed color="white">
      <v-btn icon @click.native="history.back()">
            <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Iklankan Properti</v-toolbar-title>
    </v-toolbar>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 class="pa-3">
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-subheader><b>Info Properti</b></v-subheader>
          <v-select label="Tipe Properti" v-model="select" :items="form.propertyType.options"
            :rules="[v => !!v || 'Item is required']"
            :hide-details="true"
            required
          ></v-select>
          <v-radio-group v-model="form.listingType.value" row label="Tipe Listing" :hide-details="true">
            <v-radio v-for="item in form.listingType.options" :key="item.value" :label="item.label" :value="item.value" ></v-radio>
          </v-radio-group>
          <v-text-field
            label="Judul"
            v-model="form.title.value"
            :rules="form.title.rule"
            :counter="form.title.maxChar"
            :hide-details="true"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.description.value"
            :label="form.description.label"
            :rules="form.description.rules"
            :counter="form.description.maxChar"
            :hide-details="true"
            required
          ></v-text-field>

          <v-subheader><b>Tentukan Lokasi</b></v-subheader>
          <v-select :label="form.province.label" v-model="form.province.value" :items="form.province.options"
            :hide-details="true"
            required
          ></v-select>
          <v-select :label="form.city.label" v-model="form.city.value" :items="form.city.options"
            :hide-details="true"
            required
          ></v-select>
          <v-text-field
            v-model="form.street.value"
            :label="form.street.label"
            :rules="[ v => v.length <= form.street.maxChar || 'Must be less than ' + form.street.maxChar + ' characters']"
            :counter="form.street.maxChar"
            :hide-details="true"
            required
          ></v-text-field>
          <p>Jika pinnya sudah berada di tempat yang benar, Anda dapat mengunci peta.</p>
          <v-switch :label="form.lockMap.label" v-model="form.lockMap.value" hide-details></v-switch>

          <v-subheader><b>Tambahkan Detail</b></v-subheader>
          <v-checkbox :label="form.isOwner.label" v-model="form.isOwner.value" ></v-checkbox>
          <v-text-field v-model="form.address.value" :label="form.address.label" :hide-details="true" required ></v-text-field>
          <v-text-field v-model="form.complex.value" :label="form.complex.label" :hide-details="true" required></v-text-field>
          <v-text-field v-model="form.cluster.value" :label="form.cluster.label" :hide-details="true" required></v-text-field>
          <v-text-field v-model="form.additional.value" :label="form.additional.label" :hide-details="true" required ></v-text-field>
          <v-select :label="form.currency.label" v-model="form.currency.value" :items="form.currency.options"
            item-text="label"
            item-value="value"
            :hide-details="true"
            required
          ></v-select>
          <v-text-field v-model="form.price.value" :label="form.price.label" :hide-details="true" required number></v-text-field>
          <v-checkbox :label="form.negoType.label" v-model="form.negoType.value" ></v-checkbox>
          <v-select :label="form.certificate.label" v-model="form.certificate.value" :items="form.certificate.options"
            item-text="label"
            item-value="value"
            :hide-details="true"
            required
          ></v-select>
          <v-select :label="form.bedroom.label" v-model="form.bedroom.value" :items="form.bedroom.options"
            :hide-details="true"
            required
          ></v-select>
          <v-select :label="form.bathroom.label" v-model="form.bathroom.value" :items="form.bathroom.options"
            :hide-details="true"
            required
          ></v-select>
          <v-select :label="form.additionalBedroom.label" v-model="form.additionalBedroom.value" :items="form.additionalBedroom.options"
            :hide-details="true"
            required
          ></v-select>
          <v-select :label="form.additionalBathroom.label" v-model="form.additionalBathroom.value" :items="form.additionalBathroom.options"
            :hide-details="true"
            required
          ></v-select>
          <v-select :label="form.floor.label" v-model="form.floor.value" :items="form.floor.options"
            :hide-details="true"
            required
          ></v-select>
          <v-text-field v-model="form.landArea.value" :label="form.landArea.label" :hide-details="true" required ></v-text-field>
          <v-text-field v-model="form.buildingArea.value" :label="form.buildingArea.label" :hide-details="true" required ></v-text-field>
          <v-select :label="form.garage.label" v-model="form.garage.value" :items="form.garage.options"
            :hide-details="true"
            required
          ></v-select>
          <v-select :label="form.carports.label" v-model="form.carports.value" :items="form.carports.options"
            :hide-details="true"
            required
          ></v-select>
          <v-select :label="form.marketType.label" v-model="form.marketType.value" :items="form.marketType.options"
            :hide-details="true"
            required
          ></v-select>
          <v-select :label="form.buildingAge.label" v-model="form.buildingAge.value" :items="form.buildingAge.options"
            :hide-details="true"
            required
          ></v-select>
          <v-text-field v-model="form.yearsBuilt.value" :label="form.yearsBuilt.label" :hide-details="true" required ></v-text-field>
          <v-select :label="form.interior.label" v-model="form.interior.value" :items="form.interior.options"
            :hide-details="true"
            required
          ></v-select>          

          <v-subheader><b>Fasilitas</b></v-subheader>
          <v-checkbox v-for="item in form.facilities" :key="item"
            :label="item.label"
            v-model="item.value"
            :hide-details="true"
          ></v-checkbox>

          <v-btn dark block @click.native="console.log('Submited')" color="orange darken-3" :disabled="!valid">Simpan dan Lanjutkan</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      form: {
        propertyType: {
          value: null,
          options: [
            'Rumah',
            'Apartemen',
            'Ruko',
            'Vila',
            'Komersial',
            'Tanah',
            'Kost',
            'Ruang Kantor',
            'Gudang',
            'Hotel',
            'Kios',
            'Pabrik',
            'Gedung Bertingkat',
            'Kondotel',
            'Toko'
          ]
        },
        listingType: {
          value: 1,
          label: [ 'Dijual', 'Disewa' ],
          options: [
            { value: 1, label: 'Dijual' },
            { value: 2, label: 'Disewa' }
          ]
        },
        title: {
          label: 'Judul',
          value: null,
          maxChar: 75,
          rules: [
            v => v.length <= 75 || 'Must be less than 75 characters'
          ]
        },
        description: {
          label: 'Deskripsi',
          value: null,
          maxChar: 1500,
          rules: [
            v => v.length <= 1500 || 'Must be less than 75 characters'
          ]
        },
        province: {
          label: 'Provinsi',
          value: null,
          options: []
        },
        city: {
          label: 'Kota/Kabupaten',
          value: null,
          options: []
        },
        street: {
          label: 'Nama Jalan',
          value: null,
          maxChar: 100
        },
        map: {
          lat: null,
          lang: null
        },
        lockMap: {
          label: 'Kunci Peta',
          value: false
        },
        isOwner: {
          label: 'Apakah Anda pemilik properti ini?',
          value: false
        },
        address: {
          label: 'Info Alamat',
          value: null
        },
        complex: {
          label: 'Nama Kompleks',
          value: null
        },
        cluster: {
          label: 'Nama Cluster',
          value: null
        },
        additional: {
          label: 'Wilayah Tambahan',
          value: null
        },
        currency: {
          label: 'Mata Uang',
          value: null,
          options: [
            {value: 1, label: 'IDR (Rp)'},
            {value: 2, label: 'USD ($)'}
          ]
        },
        price: {
          label: 'Harga',
          value: null
        },
        negoType: {
          label: 'Tipe Nego',
          value: false
        },
        certificate: {
          label: 'Sertifikasi',
          value: null,
          options: [
            {value: 1, label: 'SHM'},
            {value: 2, label: 'HBG'},
            {value: 3, label: 'Hak Pakai'},
            {value: 4, label: 'HGU'},
            {value: 5, label: 'Hak Kelola'},
            {value: 6, label: 'AJB'},
            {value: 7, label: 'PPJB'},
            {value: 9, label: 'Strata Title'},
            {value: 0, label: 'Lain-lain'}
          ]
        },
        bedroom: {
          label: 'Kamar Tidur',
          value: null,
          options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        },
        bathroom: {
          label: 'Kamar Mandi',
          value: null,
          options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        },
        additionalBedroom: {
          label: 'Kamar Tidur Pembantu',
          value: null,
          options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        },
        additionalBathroom: {
          label: 'Kamar Tidur Pembantu',
          value: null,
          options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        },
        floor: {
          label: 'Jumlah Lantai',
          value: null,
          options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        },
        landArea: {
          label: 'Luas Tanah',
          value: null
        },
        buildingArea: {
          label: 'Luas Bangunan',
          value: null
        },
        garage: {
          label: 'Garasi',
          value: null,
          options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        },
        carports: {
          label: 'Carports',
          value: null,
          options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        },
        marketType: {
          label: 'Market Type',
          value: null,
          options: [
            {value: 1, label: 'Primary'},
            {value: 2, label: 'Secondary'}
          ]
        },
        buildingAge: {
          label: 'Umur Bangunan',
          value: null,
          options: [
            {value: 1, label: 'Baru'},
            {value: 2, label: 'Lama'}
          ]
        },
        electricalPower: {
          label: 'Daya Listrik',
          value: null
        },
        buildingOrientation: {
          label: 'Orientasi Bangunan',
          value: null,
          options: [
            {value: 1, label: 'Utara'},
            {value: 2, label: 'Barat'},
            {value: 3, label: 'Selatan'},
            {value: 4, label: 'Timur'},
            {value: 5, label: 'Barat Laut'},
            {value: 6, label: 'Barat Daya'},
            {value: 7, label: 'Tenggara'},
            {value: 8, label: 'Timur Laut'},
            {value: 9, label: 'Hook'}
          ]
        },
        yearsBuilt: {
          label: 'Tahun Dibangun',
          value: null
        },
        interior: {
          label: 'Interior',
          value: null,
          options: [
            {value: 1, label: 'Full Furnish'},
            {value: 2, label: 'Semi Furnish'},
            {value: 3, label: 'Non Furnish'}
          ]
        },
        facilities: [
          {value: false, id: 1, label: 'AC'},
          {value: false, id: 2, label: 'Internet'},
          {value: false, id: 3, label: 'Keamanan 24 Jam'},
          {value: false, id: 4, label: 'Pusat kebugaran'},
          {value: false, id: 5, label: 'Pusat Bisnis'},
          {value: false, id: 6, label: 'TV Kabel'},
          {value: false, id: 7, label: 'Kolam Renang'},
          {value: false, id: 8, label: 'Akses Jalan Tol'},
          {value: false, id: 9, label: 'Masuk Mobil'},
          {value: false, id: 10, label: 'Dekat Jalan Raya'},
          {value: false, id: 11, label: 'Dekat Kawasan Bisnis'},
          {value: false, id: 12, label: 'Dekat Pusat Perbelanjaan'},
          {value: false, id: 13, label: 'Dekat Stasiun'},
          {value: false, id: 14, label: 'Dekat Sekolah'},
          {value: false, id: 15, label: 'Dekat Rumah Sakit'},
          {value: false, id: 16, label: 'Dekat Tempat Ibadah'},
          {value: false, id: 18, label: 'Bebas Banjir'}
        ]
      },
      select: null
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
