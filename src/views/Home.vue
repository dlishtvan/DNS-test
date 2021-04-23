<template>
  <b-container>
    <b-row>
      <b-col>
        <b-row class="mb-4">
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
          <b-col>
            <feed-mill-view
              :feed-mill="activeFeedMill"
            >
            </feed-mill-view>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FeedMill from '@/components/FeedMill';
import FeedMillView from '@/components/FeedMillView';
import {vxm} from '@/store';
import FeedMillsInterface from "@/types/FeedMillsInterface";

@Component({
  components: {
    FeedMillView,
    FeedMill
  },
})

export default class Home extends Vue {
  searchQuery = ''

  activeFeedMill: FeedMillsInterface = {}

  get feedMills(): FeedMillsInterface {
    return vxm.feedMills.feedMillsData.filter(feedMill => {
      return feedMill.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    });
  }

  addFeedMill(): void {
    vxm.feedMills.addFeedMill({
      id: new Date().getTime(),
      name: `Feed Mill ${this.feedMills.length + 1}`,
      createdAt: new Date()
    })
  }

  onEdit(feedMill: string): void {
    this.$set(this, 'activeFeedMill', feedMill)
  }

  mounted() {
    //console.log(vxm.feedMills);
  }
}
</script>
