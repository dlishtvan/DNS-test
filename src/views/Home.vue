<template>
  <b-container>
    <b-row>
      <b-col>
        <b-row>
          <b-col>Feed Mill</b-col>
          <b-col>
            <b-button
                pill
                variant="success"
                @click="addFeedMill"
            >
              Create new feed mill
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mills-list">
            <b-row align-h="end">
              <b-col>
                Sort-by:
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-input
                    v-model="searchQuery"
                    placeholder="Search Feed Mills"
                ></b-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <feed-mill
                    v-for="feedMill in feedMills"
                    :key="feedMill.id"
                    v-bind:feedMill="feedMill"
                    @edit="onEdit"
                />
              </b-col>
            </b-row>
          </b-col>
          <b-col v-if="true">
            <div class="mb-3">
              <label for="edit-name">Diet Name:</label>
              <b-form-input
                  id="edit-name"
                  type="text"
                  v-model="activeFeedMill.name"
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
                >
                  Save Feed Mill
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FeedMill from '@/components/FeedMill';
import {vxm} from '@/store';
import FeedMillsInterface from "@/types/FeedMillsInterface";
import Multiselect from 'vue-multiselect'

@Component({
  components: {
    FeedMill,
    Multiselect
  },
})

export default class Home extends Vue {
  searchQuery = ''

  activeFeedMill: FeedMillsInterface = {}

  optionsValue = null

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


  get feedMills(): FeedMillsInterface {
    return vxm.feedMills.feedMillsData.filter(feedMill => {
      return feedMill.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    });
  }

  addFeedMill(): void {
    vxm.feedMills.addFeedMill({
      id: new Date().getTime(),
      name: 'Feed Millwqee',
      createdAt: new Date()
    })
  }

  deleteFeedMill(): void {
    vxm.feedMills.deleteFeedMill(this.activeFeedMill.id)
  }

  onEdit(feedMill: string): void {
    console.log(feedMill);
    this.$set(this, 'activeFeedMill', feedMill)
  }

  mounted() {
    //console.log(vxm.feedMills);
  }
}
</script>

<style scoped lang="sass">
  @import "~vue-multiselect/dist/vue-multiselect.min.css"
</style>
