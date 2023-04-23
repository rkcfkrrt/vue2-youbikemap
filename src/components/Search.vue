<template>
  <div class="search">
    <section class="search-banner">
      <div
        class="search-banner__logo"
        @click="handleRouteLinkClick('Home')"
      ></div>
      <div
        class="search-banner__btnWrap"
        :class="actionIsRent ? 'rent' : 'return'"
      >
        <div class="search-banner__btnAction rent" @click="actionIsRent = true">
          <div class="search-banner__btnAction-icon rent">
            <svg
              v-if="actionIsRent"
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5902 19.0469C10.8705 18.3273 9.91875 17.9326 8.91473 17.9326C7.91071 17.9326 6.95893 18.3331 6.23929 19.0527C5.51964 19.7724 5.125 20.7241 5.125 21.7282C5.125 22.7322 5.51964 23.684 6.23929 24.3978C6.95893 25.1174 7.91071 25.5121 8.91473 25.5121C9.91875 25.5121 10.8705 25.1174 11.5902 24.3978C12.3098 23.6782 12.7045 22.7264 12.7045 21.7224C12.7045 20.7183 12.3098 19.7666 11.5902 19.0469ZM3.5 21.7224C3.5 18.7451 5.9375 16.3076 8.91473 16.3076C11.8978 16.3076 14.3353 18.7451 14.3295 21.7282C14.3295 24.7054 11.892 27.1429 8.91473 27.1429C5.9375 27.1429 3.5 24.7054 3.5 21.7224ZM22.0598 6.70271C22.0598 7.73575 21.2357 8.55986 20.2027 8.55986C19.1754 8.55986 18.3455 7.72995 18.3455 6.70271C18.3455 5.66968 19.1812 4.85718 20.2143 4.85718C21.2473 4.85718 22.0598 5.66968 22.0598 6.70271ZM26.7607 19.0469C26.0411 18.3273 25.0893 17.9326 24.0853 17.9326C23.0754 17.9326 22.1237 18.3331 21.4098 19.0527C20.6902 19.7724 20.2955 20.7241 20.2955 21.7282C20.2955 22.7322 20.6902 23.684 21.4098 24.4036C22.1295 25.1232 23.0813 25.5179 24.0853 25.5179C25.0893 25.5179 26.0411 25.1232 26.7607 24.3978C27.4804 23.6782 27.875 22.7264 27.875 21.7224C27.875 20.7183 27.4804 19.7666 26.7607 19.0469ZM18.6705 21.7224C18.6705 18.7451 21.108 16.3076 24.0853 16.3076C27.0625 16.3076 29.5 18.7451 29.5 21.7224C29.5 24.6996 27.0625 27.1371 24.0853 27.1371C21.108 27.1371 18.6705 24.6996 18.6705 21.7224ZM20.2142 12.2858H22.9999C23.5107 12.2858 23.9285 12.7036 23.9285 13.2143C23.9285 13.725 23.5107 14.1429 22.9999 14.1429H19.6687C19.2393 14.1429 18.8681 13.5046 18.3211 12.5638C18.0771 12.1441 17.7981 11.6643 17.4633 11.1541L14.6254 14.1429C14.9814 14.4214 15.4226 14.678 15.8488 14.9259C16.6663 15.4014 17.4285 15.8447 17.4285 16.3483V21.5715C17.4285 22.0822 17.0107 22.5 16.4999 22.5C15.9892 22.5 15.5714 22.0822 15.5714 21.5715V17.7469C15.5714 17.2115 15.1108 16.9697 13.916 16.3423C13.4143 16.0789 12.7831 15.7475 12.0022 15.2978C11.9815 15.2855 11.9593 15.2727 11.936 15.2591C11.574 15.0488 10.9285 14.6738 10.9285 13.725C10.9285 13.2375 11.1433 12.75 11.4683 12.425L15.6294 8.41478C15.9544 8.08978 16.4419 7.87505 16.9294 7.87505C17.5794 7.87505 18.1772 8.25808 18.5022 8.79781L20.2142 12.2858Z"
                fill="#FED801"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5902 19.0469C10.8705 18.3273 9.91875 17.9326 8.91473 17.9326C7.91071 17.9326 6.95893 18.3331 6.23929 19.0527C5.51964 19.7724 5.125 20.7241 5.125 21.7282C5.125 22.7322 5.51964 23.684 6.23929 24.3978C6.95893 25.1174 7.91071 25.5121 8.91473 25.5121C9.91875 25.5121 10.8705 25.1174 11.5902 24.3978C12.3098 23.6782 12.7045 22.7264 12.7045 21.7224C12.7045 20.7183 12.3098 19.7666 11.5902 19.0469ZM3.5 21.7224C3.5 18.7451 5.9375 16.3076 8.91473 16.3076C11.8978 16.3076 14.3353 18.7451 14.3295 21.7282C14.3295 24.7054 11.892 27.1429 8.91473 27.1429C5.9375 27.1429 3.5 24.7054 3.5 21.7224ZM22.0598 6.70271C22.0598 7.73575 21.2357 8.55986 20.2027 8.55986C19.1754 8.55986 18.3455 7.72995 18.3455 6.70271C18.3455 5.66968 19.1812 4.85718 20.2143 4.85718C21.2473 4.85718 22.0598 5.66968 22.0598 6.70271ZM26.7607 19.0469C26.0411 18.3273 25.0893 17.9326 24.0853 17.9326C23.0754 17.9326 22.1237 18.3331 21.4098 19.0527C20.6902 19.7724 20.2955 20.7241 20.2955 21.7282C20.2955 22.7322 20.6902 23.684 21.4098 24.4036C22.1295 25.1232 23.0813 25.5179 24.0853 25.5179C25.0893 25.5179 26.0411 25.1232 26.7607 24.3978C27.4804 23.6782 27.875 22.7264 27.875 21.7224C27.875 20.7183 27.4804 19.7666 26.7607 19.0469ZM18.6705 21.7224C18.6705 18.7451 21.108 16.3076 24.0853 16.3076C27.0625 16.3076 29.5 18.7451 29.5 21.7224C29.5 24.6996 27.0625 27.1371 24.0853 27.1371C21.108 27.1371 18.6705 24.6996 18.6705 21.7224ZM20.2142 12.2858H22.9999C23.5107 12.2858 23.9285 12.7036 23.9285 13.2143C23.9285 13.725 23.5107 14.1429 22.9999 14.1429H19.6687C19.2393 14.1429 18.8681 13.5046 18.3211 12.5638C18.0771 12.1441 17.7981 11.6643 17.4633 11.1541L14.6254 14.1429C14.9814 14.4214 15.4226 14.678 15.8488 14.9259C16.6663 15.4014 17.4285 15.8447 17.4285 16.3483V21.5715C17.4285 22.0822 17.0107 22.5 16.4999 22.5C15.9892 22.5 15.5714 22.0822 15.5714 21.5715V17.7469C15.5714 17.2115 15.1108 16.9697 13.916 16.3423C13.4143 16.0789 12.7831 15.7475 12.0022 15.2978C11.9815 15.2855 11.9593 15.2727 11.936 15.2591C11.574 15.0488 10.9285 14.6738 10.9285 13.725C10.9285 13.2375 11.1433 12.75 11.4683 12.425L15.6294 8.41478C15.9544 8.08978 16.4419 7.87505 16.9294 7.87505C17.5794 7.87505 18.1772 8.25808 18.5022 8.79781L20.2142 12.2858Z"
                fill="#000"
              />
            </svg>
          </div>
          <div class="search-banner__btnAction-text rent">租車</div>
        </div>
        <div
          class="search-banner__btnAction return"
          @click="actionIsRent = false"
        >
          <div class="search-banner__btnAction-icon return">
            <svg
              v-if="actionIsRent"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <rect x="2.5" y="2" width="20" height="20" rx="3" fill="black" />
              <path
                d="M12.8846 5.0769H7.5V18.9231H10.5769V14.3077H12.8846C15.4308 14.3077 17.5 12.2384 17.5 9.69229C17.5 7.14614 15.4308 5.0769 12.8846 5.0769ZM13.0385 11.2308H10.5769V8.15383H13.0385C13.8846 8.15383 14.5769 8.84613 14.5769 9.69229C14.5769 10.5384 13.8846 11.2308 13.0385 11.2308Z"
                fill="white"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="#fed801"
            >
              <rect x="2.5" y="2" width="20" height="20" rx="3" fill="black" />
              <path
                d="M12.8846 5.0769H7.5V18.9231H10.5769V14.3077H12.8846C15.4308 14.3077 17.5 12.2384 17.5 9.69229C17.5 7.14614 15.4308 5.0769 12.8846 5.0769ZM13.0385 11.2308H10.5769V8.15383H13.0385C13.8846 8.15383 14.5769 8.84613 14.5769 9.69229C14.5769 10.5384 13.8846 11.2308 13.0385 11.2308Z"
                fill="#fed801"
              />
            </svg>
          </div>
          <div class="search-banner__btnAction-text return">還車</div>
        </div>
      </div>
      <div
        class="search-banner__back"
        @click="handleRouteLinkClick('Home')"
      ></div>
      <!-- <div class="search-banner__showPath">
        顯示車道 <span class="latitude"></span> <span class="longitude"></span>
      </div> -->
    </section>
    <section class="map-container" id="map-container">
      <l-map
        ref="map"
        v-loading="loading.map"
        class="map"
        :zoom="zoom"
        :center="center"
        @update:center="centerUpdated"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
          :options="{ minZoom: 11, maxZoom: 18 }"
        ></l-tile-layer>
        <l-control-scale
          position="bottomleft"
          :imperial="false"
          :metric="true"
        ></l-control-scale>
        <l-marker
          v-if="userPosition.lat !== undefined"
          :latLng="[userPosition.lat, userPosition.lon]"
        >
          <l-icon :icon-anchor="iconAnchor">
            <lottie
              :options="defaultOptions"
              :height="80"
              :width="80"
              @animCreated="handleAnimation"
            />
          </l-icon>
        </l-marker>
        <l-marker
          v-for="item in stationList"
          :key="item.StationID"
          :latLng="[
            item.StationPosition.PositionLat,
            item.StationPosition.PositionLon,
          ]"
          @click="selectClick(item)"
        >
          <l-icon
            :className="iconClass(item)"
            :icon-anchor="iconAnchor"
            :icon-size="iconSize"
          >
            <svg
              v-if="item.AvailableRentBikes && actionIsRent"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="50"
              viewBox="0 0 36 50"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 18.0726C0 8.09194 8.05911 0 17.9993 0C27.9409 0 36 8.09194 36 18.0726C36 26.8625 29.7496 34.1853 21.4692 35.8091L19.1796 42.1448C18.7795 43.2515 17.2205 43.2515 16.8204 42.1448L14.5308 35.8091C6.25038 34.1853 0 26.8625 0 18.0726ZM25.3249 47.8777C25.3249 49.0498 22.0451 50 17.9992 50C13.9534 50 10.6735 49.0498 10.6735 47.8777C10.6735 46.7055 13.9534 45.7553 17.9992 45.7553C22.0451 45.7553 25.3249 46.7055 25.3249 47.8777Z"
                fill="#FED801"
              />
            </svg>
            <svg
              v-if="
                (actionIsRent && item.AvailableRentBikes === 0) ||
                (!actionIsRent && item.AvailableReturnBikes === 0)
              "
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="50"
              viewBox="0 0 36 50"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 18.0726C0 8.09194 8.05911 0 17.9993 0C27.9409 0 36 8.09194 36 18.0726C36 26.8625 29.7496 34.1853 21.4692 35.8091L19.1796 42.1448C18.7795 43.2515 17.2205 43.2515 16.8204 42.1448L14.5308 35.8091C6.25038 34.1853 0 26.8625 0 18.0726ZM25.3249 47.8777C25.3249 49.0498 22.0451 50 17.9992 50C13.9534 50 10.6735 49.0498 10.6735 47.8777C10.6735 46.7055 13.9534 45.7553 17.9992 45.7553C22.0451 45.7553 25.3249 46.7055 25.3249 47.8777Z"
                fill="#D2D2D2"
              />
            </svg>
            <svg
              v-if="!actionIsRent && item.AvailableReturnBikes"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="50"
              viewBox="0 0 36 50"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 18.0726C0 8.09194 8.05911 0 17.9993 0C27.9409 0 36 8.09194 36 18.0726C36 26.8625 29.7496 34.1853 21.4692 35.8091L19.1796 42.1448C18.7795 43.2515 17.2205 43.2515 16.8204 42.1448L14.5308 35.8091C6.25038 34.1853 0 26.8625 0 18.0726ZM25.3249 47.8777C25.3249 49.0498 22.0451 50 17.9992 50C13.9534 50 10.6735 49.0498 10.6735 47.8777C10.6735 46.7055 13.9534 45.7553 17.9992 45.7553C22.0451 45.7553 25.3249 46.7055 25.3249 47.8777Z"
                fill="#000"
              />
            </svg>
            <span
              style="white-space: nowrap"
              :class="actionIsRent ? 'rent' : 'return'"
              >{{
                actionIsRent
                  ? item.AvailableRentBikes
                  : item.AvailableReturnBikes
              }}</span
            >
          </l-icon>
          <l-popup
            ><div class="popup-title">{{ item.StationName.Zh_tw }}</div>
            <div class="popup-title">
              可借車輛
              <div class="popup-num">{{ item.AvailableRentBikes }}</div>
            </div>
            <div class="popup-title">
              可停空位
              <div class="popup-num">{{ item.AvailableReturnBikes }}</div>
            </div></l-popup
          >
        </l-marker>
        <div class="icon-nearby" @click="center = userPosition"></div>
      </l-map>
    </section>
    <footer class="search-footer">
      <div class="search-footer__btnAction rent" @click="actionIsRent = true">
        <div class="search-footer__btnAction-icon rent">
          <svg
            v-if="actionIsRent"
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5902 19.0469C10.8705 18.3273 9.91875 17.9326 8.91473 17.9326C7.91071 17.9326 6.95893 18.3331 6.23929 19.0527C5.51964 19.7724 5.125 20.7241 5.125 21.7282C5.125 22.7322 5.51964 23.684 6.23929 24.3978C6.95893 25.1174 7.91071 25.5121 8.91473 25.5121C9.91875 25.5121 10.8705 25.1174 11.5902 24.3978C12.3098 23.6782 12.7045 22.7264 12.7045 21.7224C12.7045 20.7183 12.3098 19.7666 11.5902 19.0469ZM3.5 21.7224C3.5 18.7451 5.9375 16.3076 8.91473 16.3076C11.8978 16.3076 14.3353 18.7451 14.3295 21.7282C14.3295 24.7054 11.892 27.1429 8.91473 27.1429C5.9375 27.1429 3.5 24.7054 3.5 21.7224ZM22.0598 6.70271C22.0598 7.73575 21.2357 8.55986 20.2027 8.55986C19.1754 8.55986 18.3455 7.72995 18.3455 6.70271C18.3455 5.66968 19.1812 4.85718 20.2143 4.85718C21.2473 4.85718 22.0598 5.66968 22.0598 6.70271ZM26.7607 19.0469C26.0411 18.3273 25.0893 17.9326 24.0853 17.9326C23.0754 17.9326 22.1237 18.3331 21.4098 19.0527C20.6902 19.7724 20.2955 20.7241 20.2955 21.7282C20.2955 22.7322 20.6902 23.684 21.4098 24.4036C22.1295 25.1232 23.0813 25.5179 24.0853 25.5179C25.0893 25.5179 26.0411 25.1232 26.7607 24.3978C27.4804 23.6782 27.875 22.7264 27.875 21.7224C27.875 20.7183 27.4804 19.7666 26.7607 19.0469ZM18.6705 21.7224C18.6705 18.7451 21.108 16.3076 24.0853 16.3076C27.0625 16.3076 29.5 18.7451 29.5 21.7224C29.5 24.6996 27.0625 27.1371 24.0853 27.1371C21.108 27.1371 18.6705 24.6996 18.6705 21.7224ZM20.2142 12.2858H22.9999C23.5107 12.2858 23.9285 12.7036 23.9285 13.2143C23.9285 13.725 23.5107 14.1429 22.9999 14.1429H19.6687C19.2393 14.1429 18.8681 13.5046 18.3211 12.5638C18.0771 12.1441 17.7981 11.6643 17.4633 11.1541L14.6254 14.1429C14.9814 14.4214 15.4226 14.678 15.8488 14.9259C16.6663 15.4014 17.4285 15.8447 17.4285 16.3483V21.5715C17.4285 22.0822 17.0107 22.5 16.4999 22.5C15.9892 22.5 15.5714 22.0822 15.5714 21.5715V17.7469C15.5714 17.2115 15.1108 16.9697 13.916 16.3423C13.4143 16.0789 12.7831 15.7475 12.0022 15.2978C11.9815 15.2855 11.9593 15.2727 11.936 15.2591C11.574 15.0488 10.9285 14.6738 10.9285 13.725C10.9285 13.2375 11.1433 12.75 11.4683 12.425L15.6294 8.41478C15.9544 8.08978 16.4419 7.87505 16.9294 7.87505C17.5794 7.87505 18.1772 8.25808 18.5022 8.79781L20.2142 12.2858Z"
              fill="#000"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5902 19.0469C10.8705 18.3273 9.91875 17.9326 8.91473 17.9326C7.91071 17.9326 6.95893 18.3331 6.23929 19.0527C5.51964 19.7724 5.125 20.7241 5.125 21.7282C5.125 22.7322 5.51964 23.684 6.23929 24.3978C6.95893 25.1174 7.91071 25.5121 8.91473 25.5121C9.91875 25.5121 10.8705 25.1174 11.5902 24.3978C12.3098 23.6782 12.7045 22.7264 12.7045 21.7224C12.7045 20.7183 12.3098 19.7666 11.5902 19.0469ZM3.5 21.7224C3.5 18.7451 5.9375 16.3076 8.91473 16.3076C11.8978 16.3076 14.3353 18.7451 14.3295 21.7282C14.3295 24.7054 11.892 27.1429 8.91473 27.1429C5.9375 27.1429 3.5 24.7054 3.5 21.7224ZM22.0598 6.70271C22.0598 7.73575 21.2357 8.55986 20.2027 8.55986C19.1754 8.55986 18.3455 7.72995 18.3455 6.70271C18.3455 5.66968 19.1812 4.85718 20.2143 4.85718C21.2473 4.85718 22.0598 5.66968 22.0598 6.70271ZM26.7607 19.0469C26.0411 18.3273 25.0893 17.9326 24.0853 17.9326C23.0754 17.9326 22.1237 18.3331 21.4098 19.0527C20.6902 19.7724 20.2955 20.7241 20.2955 21.7282C20.2955 22.7322 20.6902 23.684 21.4098 24.4036C22.1295 25.1232 23.0813 25.5179 24.0853 25.5179C25.0893 25.5179 26.0411 25.1232 26.7607 24.3978C27.4804 23.6782 27.875 22.7264 27.875 21.7224C27.875 20.7183 27.4804 19.7666 26.7607 19.0469ZM18.6705 21.7224C18.6705 18.7451 21.108 16.3076 24.0853 16.3076C27.0625 16.3076 29.5 18.7451 29.5 21.7224C29.5 24.6996 27.0625 27.1371 24.0853 27.1371C21.108 27.1371 18.6705 24.6996 18.6705 21.7224ZM20.2142 12.2858H22.9999C23.5107 12.2858 23.9285 12.7036 23.9285 13.2143C23.9285 13.725 23.5107 14.1429 22.9999 14.1429H19.6687C19.2393 14.1429 18.8681 13.5046 18.3211 12.5638C18.0771 12.1441 17.7981 11.6643 17.4633 11.1541L14.6254 14.1429C14.9814 14.4214 15.4226 14.678 15.8488 14.9259C16.6663 15.4014 17.4285 15.8447 17.4285 16.3483V21.5715C17.4285 22.0822 17.0107 22.5 16.4999 22.5C15.9892 22.5 15.5714 22.0822 15.5714 21.5715V17.7469C15.5714 17.2115 15.1108 16.9697 13.916 16.3423C13.4143 16.0789 12.7831 15.7475 12.0022 15.2978C11.9815 15.2855 11.9593 15.2727 11.936 15.2591C11.574 15.0488 10.9285 14.6738 10.9285 13.725C10.9285 13.2375 11.1433 12.75 11.4683 12.425L15.6294 8.41478C15.9544 8.08978 16.4419 7.87505 16.9294 7.87505C17.5794 7.87505 18.1772 8.25808 18.5022 8.79781L20.2142 12.2858Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          class="search-footer__btnAction-text rent"
          :class="actionIsRent ? '' : 'white'"
        >
          租車
        </div>
      </div>
      <div
        class="search-footer__btnAction return"
        @click="actionIsRent = false"
      >
        <div class="search-footer__btnAction-icon return">
          <svg
            v-if="actionIsRent"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <rect x="2.5" y="2" width="20" height="20" rx="3" fill="white" />
            <path
              d="M12.8846 5.0769H7.5V18.9231H10.5769V14.3077H12.8846C15.4308 14.3077 17.5 12.2384 17.5 9.69229C17.5 7.14614 15.4308 5.0769 12.8846 5.0769ZM13.0385 11.2308H10.5769V8.15383H13.0385C13.8846 8.15383 14.5769 8.84613 14.5769 9.69229C14.5769 10.5384 13.8846 11.2308 13.0385 11.2308Z"
              fill="#fed801"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="#fed801"
          >
            <rect x="2.5" y="2" width="20" height="20" rx="3" fill="black" />
            <path
              d="M12.8846 5.0769H7.5V18.9231H10.5769V14.3077H12.8846C15.4308 14.3077 17.5 12.2384 17.5 9.69229C17.5 7.14614 15.4308 5.0769 12.8846 5.0769ZM13.0385 11.2308H10.5769V8.15383H13.0385C13.8846 8.15383 14.5769 8.84613 14.5769 9.69229C14.5769 10.5384 13.8846 11.2308 13.0385 11.2308Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          class="search-footer__btnAction-text return"
          :class="actionIsRent ? 'white' : ''"
        >
          還車
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import L from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  // LTooltip,
  LControlScale,
  LPopup,
} from "vue2-leaflet";
import { stationNearByApi, availabilityNearByApi } from "../api/bike";
// import * as youbike from "@/assets/json/youbike.json";
import * as animationData from "@/assets/json/youbike_GPS.json";

export default {
  name: "Search",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    // LTooltip,
    LControlScale,
    LPopup,
  },
  data() {
    return {
      actionIsRent: true,
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}",
      attribution: "© 臺灣通用電子地圖",
      center: [22.668195, 120.318532],
      zoom: 16,
      caseItem: [],
      iconAnchor: [30, 22],
      iconSize: [60, 22],
      // iconUrl: "@/assets/img/GPS.png",
      searchLatlngIconShow: false,
      stationList: [],
      availabilityList: [],
      userPosition: {
        lat: undefined,
        lon: undefined,
      },
      loading: {
        search: false,
        map: false,
      },
      // 動畫
      animationLottie: null,
      // 沒寫成 animationData: animationData.default 會報錯
      defaultOptions: { animationData: animationData.default }, 
      animationSpeed: 2,
      anim: {},
    };
  },
  watch: {
    // center: {
    //   handler: function () {
    //     this.map.setView(this.center, 16);
    //     this.queryStationNearByApi();
    //   },
    //   deep: true,
    // },
  },
  methods: {
    initaMap() {
      // 初始化
      this.map = L.map("map-container", { zoomControl: false }).setView(
        this.center,
        12
      );
      // 底圖
      L.tileLayer(
        "https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}",
        {
          maxZoom: 19,
          attribution: "© OpenStreetMap",
        }
      ).addTo(this.map);
      // 可切換圖層
      const mapbox = L.tileLayer(
        "https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}",
        {
          maxZoom: 19,
          attribution: "© OpenStreetMap",
        }
      );
      const topo = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution: "© OpenStreetMap",
        }
      );
      // eslint-disable-next-line no-unused-vars
      const baseMaps = {
        臺灣通用電子地圖: mapbox,
        "OSM 開放街圖 map": topo,
      };
    },
    handleRouteLinkClick(newRoute) {
      // 避免相同頁面報錯
      if (this.$router.currentRoute.name !== newRoute)
        this.$router.push({ name: newRoute });
    },
    positionError(err) {
      console.log(err);
      this.loading.map = false;
      alert(`Something went wrong... You need to allow for it to run!`);
    },
    positionSuccess(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      // console.log("position", position.coords);
      this.center = {};
      this.center.lat = lat;
      this.center.lon = lon;

      this.userPosition = {};
      this.userPosition.lat = lat;
      this.userPosition.lon = lon;
      this.loading.map = false;
    },
    getUserPosition() {
      this.loading.map = true;

      navigator.geolocation.getCurrentPosition(
        this.positionSuccess,
        this.positionError
      );
      // watchPosition
    },
    async queryStationNearByApi() {
      this.stationList.length = 0;
      this.loading.map = true;

      this.queryAvailabilityNearByApi();

      await stationNearByApi(this.center.lat, this.center.lng, 1000)
        .then((res) => {
          if (res.status === 200) {
            // console.log(this.center, res.data);
            this.stationList = res.data;
            if (this.stationList.length === 0) {
              this.$message({
                message: "目前位置無相關站點，請移動或地圖以更新資料。",
                type: "warning",
                duration: 2000,
                customClass: "mes",
              });
              return;
            }
            this.stationList.forEach((item) => {
              this.availabilityList.forEach((i) => {
                if (i.StationUID == item.StationUID) {
                  item.AvailableRentBikes = i.AvailableRentBikes;
                  item.AvailableReturnBikes = i.AvailableReturnBikes;
                }
              });
            });
          }
        })
        .catch((error) => {
          const msg = error.response.data.Message;
          console.log("stationNearByApi", msg);
        })
        .finally(() => {
          // this.center = [
          //   this.stationList[0].StationPosition.PositionLat,
          //   this.stationList[0].StationPosition.PositionLon,
          // ];

          this.loading.map = false;
        });
    },
    async queryAvailabilityNearByApi() {
      this.availabilityList.length = 0;
      this.loading.map = true;

      await availabilityNearByApi(this.center.lat, this.center.lng, 1000)
        .then((res) => {
          if (res.status === 200) {
            this.availabilityList = res.data;
          }
        })
        .catch((error) => {
          const msg = error.response.data.Message;
          console.log("availabilityNearByApi", msg);
        })
        .finally(() => {
          this.loading.map = false;
        });
    },
    centerUpdated(center) {
      // console.log(center);
      this.center = center;
      this.queryStationNearByApi();
    },
    selectClick(item) {
      console.log("selectClick", item);
    },
    iconClass() {
      return "mapIcon";
    },
    handleAnimation(anim) {
      this.anim = anim;
      // console.log("anim", this.anim);
    },
  },
  mounted() {
    // this.initaMap();
    this.getUserPosition();

  },
};
</script>
<style lang="scss" scoped>
.search {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  &-banner {
    width: 100vw;
    height: 92px;
    background-color: #fed801;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
      height: 64px;
      justify-content: flex-start;
    }

    &__logo {
      width: 245px;
      height: 47px;
      background-image: url("../assets/img/Logo-bike.png");
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    &__subtitle {
      font-family: Noto Sans TC;
      color: #000;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    &__btnWrap {
      width: 276px;
      height: 42px;
      position: relative;
      background-color: #fff;
      box-shadow: #dfdfdf 0 0 0 0 inset;
      border-radius: 20px;
      background-clip: content-box;
      display: inline-block;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      user-select: none;
      outline: none;
      @media screen and (max-width: 768px) {
        display: none;
      }
      &.rent {
        .search-banner__btnAction {
          &.rent {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            position: absolute;
            width: 138px;
            height: 42px;
            background-color: #000;
            border-radius: 20px;
            left: 0px;
            top: 0;
            bottom: 0;
            margin: auto;
            transition: 0.3s;
          }

          &-icon.rent {
            width: 32px;
            height: 32px;
            // background-image: url("../assets/img/bike.svg");
          }

          &-text.rent {
            color: #fed801;
            font-size: 14px;
            letter-spacing: 14px;
            line-height: 14px;
          }
        }
        .search-banner__btnAction {
          &.return {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            position: absolute;
            width: 138px;
            height: 42px;
            border-radius: 20px;
            right: 0px;
            top: 0;
            bottom: 0;
            margin: auto;
            transition: 0.3s;
          }
          &-icon.return {
            width: 24px;
            height: 24px;
            // background-image: url("../assets/img/parking.svg");
          }

          &-text.return {
            color: #000;
            font-size: 14px;
            letter-spacing: 14px;
            line-height: 14px;
          }
        }
      }
      &.return {
        .search-banner__btnAction {
          &.return {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            position: absolute;
            width: 138px;
            height: 42px;
            background-color: #000;
            border-radius: 20px;
            right: 0px;
            top: 0;
            bottom: 0;
            margin: auto;
            transition: 0.3s;
          }

          &-icon.return {
            width: 24px;
            height: 24px;
            // background-image: url("../assets/img/parking.svg");
            color: #fed801;
          }

          &-text.return {
            color: #fed801;
            font-size: 14px;
            letter-spacing: 14px;
            line-height: 14px;
          }

          &.rent {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            position: absolute;
            width: 138px;
            height: 42px;
            border-radius: 20px;
            left: 0px;
            top: 0;
            bottom: 0;
            margin: auto;
            transition: 0.3s;
          }

          &-icon.rent {
            width: 32px;
            height: 32px;
            // background-image: url("../assets/img/bike.svg");
            color: #000;
          }

          &-text.rent {
            color: #000;
            font-size: 14px;
            letter-spacing: 14px;
            line-height: 14px;
          }
        }
      }
    }

    &__back {
      width: 24px;
      height: 24px;
      display: none;
      margin-left: 16px;
      background-image: url("../assets/img/back.png");
      cursor: pointer;

      @media screen and (max-width: 768px) {
        display: inline-block;
      }
    }
  }
  #map-container {
    position: relative;
    width: 100vw;
    height: calc(100vh - 92px);

    @media screen and (max-width: 768px) {
      height: calc(100vh - 120px);
    }
  }
  .map {
    position: relative;
    z-index: 1;

    .icon-nearby {
      width: 70px;
      height: 70px;
      position: fixed;
      bottom: 5%;
      right: 5%;
      z-index: 401;
      background-image: url("../assets/img/GPS-2.png");
      cursor: pointer;

      @media screen and (max-width: 768px) {
        bottom: 12%;
        right: 3%;
      }
    }
  }
  .mapIcon {
    position: relative;
    padding: 0 0.2em;
    // background-color: white;
    background-image: url("../assets/img/GPS.png");
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -10%);
      font-size: 15px;
      font-weight: 900;
      &.rent {
        color: #000;
      }
      &.return {
        color: #fed801;
      }
    }
  }
  .leaflet-popup-content {
    div {
      font-size: 13px;
    }
    background-color: #409eff !important;
    font-size: 14px;
  }
  .leaflet-popup.leaflet-zoom-animated {
    bottom: 10px;

    .leaflet-popup-content {
      width: 200px;
    }
  }
  .popup-title {
    font-family: "Noto Sans TC";
    font-style: normal;
  }
  .popup-title + .popup-title {
    margin-top: 6px;
  }
  .popup-num {
    display: inline-block;
    margin-left: 11px;
    font-weight: 900;
    font-family: "Roboto";
    font-style: italic;
  }

  .search-footer {
    display: none;
    height: 56px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #fed801;

    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__btnAction {
      &.rent {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 11px;
      }
      &.return {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 11px;
      }
      &-text {
        letter-spacing: 14px;
        line-height: 14px;

        &.white {
          color: #fff;
        }
      }
    }
  }
  #lottie {
    width: 84px;
    height: 84px;
  }
}
</style>
