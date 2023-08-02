import { insertLast } from './insert.js';

export function createReview({ id, name, place, image }, index) {
	const hreflink = [
		'./kirinMap.html',
		'./mapoMap.html',
		'./newMap.html',
		'./koracMap.html',
		'./badaMap.html',
		'./samjjuMap.html',
		'./hutaMap.html',
		'./dieMap.html',
		'./gureomMap.html',
		'./opuMap.html',
		'./chunMap.html',
		'./keyescapeMap.html',
		'./beatphobiaMap.html',
	];
	const href = hreflink[index];

	let template = /* html */ `
  <li class="listSize" data-index= review-${id}>
  <a class="reviewLink " href="${href}">
  <img class="reviewImg" src="../../assets/images/${image.src}" alt="${image.alt}">
  <p class="reviewPlace">${place}</p> 
  <p class="reviewName">${name}</p>
  <img class="bookMark mark${id}" src="../../assets/icons/bookmarkactive=true.png" alt="북마크">
      </a>
  </li>`;
	return template;
}

function createNewReview({ name, place, date }, index) {
	const hreflink = ['./visiteLike1.html', './visiteLike2.html'];
	const href = hreflink[index];

	let template = /* html */ `
    <li>
    <a class="newListSize" href='${href}'>
      <div>
        <h2 class="font-semibold">${name}</h2>
        <div class="text-contentTeriary">
          <span class="border-r-2 pr-1">${place}</span>
          <span class="pl-1">${date} 방문</span>
        </div>
      </div>
      <img
        class="mt-[5px] h-[34px] w-[26px]"
        src="./../assets/icons/receipt.svg"
        alt="영수증 인증"
      />
    </a>
  </li>`;
	return template;
}

export function renderUserReview(target, data, index) {
	insertLast(target, createReview(data, index));
}

export function renderUserNewReview(target, data, index) {
	insertLast(target, createNewReview(data, index));
}

export function createReviewList({ id, name, place, image, detail, date }) {
	let template = /* html */ `
    <li class="reivewList reviewContent" data-index= review-${id}>
      <figure class="review__preview figureSize">
        <img
          src="../assets/images/${image.src}"
          alt=""
          class="review__previewImg figureSize"
          aria-labelledby="review__previewCap"
        />
        <figcaption id="review__previewCap" class="sr-only">${image.alt}</figcaption>
      </figure>
      <div class="reviewBox">
        <h2 class="reviewTitle">${name}</h2>
        <p class="reviewDetail">${detail}</p>
        <span class="reviewLocation text-contentTeriary"
          >${place} | <time datetime="04-01" class="reviewDate">${date}&nbsp방문</time></span
        >
        <button class="callButton">
          <img src="../assets/icons/call.png" alt="전화걸기" />
        </button>
      </div>
    </li>
  `;
	return template;
}

export function renderReviewList(target, data) {
	insertLast(target, createReviewList(data));
}

export function createPlusReview({ id, where, location, preview, sub, when }) {
	let template = /* html */ `
  <ul class="enroll__list">
  <li class="Enroll__number">
    <img src="/assets/icons/paper.png" alt="icon-paper" />
    <p class="enroll__number">NO.${id}</p>
  </li>
  <li class="Enroll__img">
    <img
      class="enroll__img"
      src="/assets/images/${preview.src}"
      alt="${preview.alt}"
    />
  </li>
  <li class="enroll__time">
    <p class="enroll__time__p">${when}<strong class="enroll__time__tag">방문</strong></p>
    <span class="enroll__text">
      ${sub}
    </span>
    <div class="enroll__tag">
      <p class="enroll__tag__p">
        <img
          class="enroll__tag__p__img"
          src="/assets/icons/time.png"
          alt="icon-sm-time"
        />수업 시간이 충분해요
      </p>
      <p class="enroll__tag__p">+5</p>
    </div>
  </li>
  <li class="Enroll__title">
    <strong class="enroll__title">${where}</strong>
    <span class="flex text-xs text-slate-500">
      <p>리뷰 <strong class="mr-1">5 l </strong></p>
      <p class="enroll__location">${location}</p>
    </span>
    <button class="heartButton1"></button>
  </li>
  <li class="enroll__zig">
    <img class="enroll__zag" src="/assets/icons/zigzag.svg" alt="zig-zag" />
  </li>
</ul>`;
	return template;
}

export function renderPlusReview(target, data) {
	insertLast(target, createPlusReview(data));
}

export function saveRiview({ id, name, place, image }) {
	let template = /* html */ `
  <ul class="enroll__list">
  <li class="Enroll__number">
    <img src="/assets/icons/paper.png" alt="icon-paper" />
    <p class="enroll__number">NO.${id}</p>
  </li>
  <li class="Enroll__img">
    <img
      class="enroll__img"
      src="/assets/images/${image.src}"
      alt="아이스아메리카노"
    />
  </li>
  <li class="enroll__time">
    <p class="enroll__time__p">22.11.4 금<strong class="enroll__time__tag">방문</strong></p>
    <span class="enroll__text">
      <p>지나가다 보고 너무 예뻐서 저장해 놓았다가</p>
      <p>이번에 가게 되었는데 너무 예쁘고 좋았어요.</p>
      <p>분위기도 힙하고 새로 생겼는데 오래 동안...</p>
    </span>
    <div class="enroll__tag">
      <p class="enroll__tag__p">
        <img
          class="enroll__tag__p__img"
          src="/assets/icons/time.png"
          alt="icon-sm-time"
        />수업 시간이 충분해요
      </p>
      <p class="enroll__tag__p">+5</p>
    </div>
  </li>
  <li class="Enroll__title">
    <strong class="enroll__title">${name}</strong>
    <span class="flex text-xs text-slate-500">
      <p>리뷰 <strong class="mr-1">5 l </strong></p>
      <p class="enroll__place">${place}</p>
    </span>
    <button class="heartButton1"></button>
  </li>
  <li class="enroll__zig">
    <img class="enroll__zag" src="/assets/icons/zigzag.svg" alt="zig-zag" />
  </li>
</ul>`;
	return template;
}

export function renderSaveReview(target, data) {
	insertLast(target, saveRiview(data));
}
