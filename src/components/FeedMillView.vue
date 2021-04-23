<template>
  <div class="feed-mill-view">
    <div class="mb-3">
      <label for="edit-name">Diet Name:</label>
      <b-form-input
          id="edit-name"
          type="text"
          v-model="formData.name"
      >
      </b-form-input>
    </div>
    <b-row>
      <b-col class="mb-4">
        <multiselect
            v-model="optionsValue"
            label="name"
            track-by="name"
            :options="options"
            :multiple="true"
            :taggable="true"
        ></multiselect>
      </b-col>
    </b-row>
    <b-row align-h="between">
      <b-col class="col-auto">
        <b-button
            variant="link"
            class="text-danger"
            @click="deleteFeedMill"
        >
          Delete Feed Mill
        </b-button>
      </b-col>
      <b-col class="col-auto">
        <b-button
            pill
            variant="success"
            @click="onSave"
        >
          Save Feed Mill
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
import FeedMillsInterface from "@/types/FeedMillsInterface";
import {vxm} from "@/store";
import Multiselect from 'vue-multiselect'

@Component({
  components: {
    Multiselect
  }
})

export default class FeedMillView extends Vue {
  @Prop() private feedMill!: FeedMillsInterface;

  optionsValue = null

  formData: FeedMillsInterface = {}

  options = [
    {title: 'Canola Meal', name:'canolaMeal'},
    {title: 'Copra Meal', name:'copraMeal'},
    {title: 'Lupins', name:'lupins'},
    {title: 'Copra Expellar', name:'copraExpellar'},
    {title: 'Cottonseed Meal', name:'cottonseedMeal'},
    {title: 'Grass Meal', name:'grassMeal'},
    {title: 'Canola Meal / Repessed Meal', name:'canolaMealRepessedMeal'},
    {title: 'Soy', name:'soy'},
    {title: 'Barley', name:'barley'},
  ]

  @Watch('feedMill')
  onChangeFeedMill(val: FeedMillsInterface): void {
    this.$set(this, 'formData', {...val})
    this.$set(this, 'optionsValue', val.options)
  }

  onSave() {
    vxm.feedMills.saveFeedMill({...this.formData, options: this.optionsValue})
  }

  deleteFeedMill(): void {
    vxm.feedMills.deleteFeedMill(this.formData.id)
    this.formData = {}
    this.optionsValue = null
  }
}
</script>


<style scoped lang="sass">
  @import "~vue-multiselect/dist/vue-multiselect.min.css"
</style>
