import { API_BASE_URL } from "../constant/backendAPI";
import { request } from "./APIService";

// 닉네임으로 특정 사용자 페이지 조회
export const getUserProfileByNickname = (nickname) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/profile/${nickname}`,
    method: "GET",
  });
};

// 소개글 수정
export const updateUserInfo = (userInfoRequest) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/update-info`,
    method: "PUT",
    body: JSON.stringify(userInfoRequest),
  });
};

// 개인정보 조회
export const getPersonalProfile = (userId) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/personal-profile/${userId}`,
    method: "GET",
  });
};

// 닉네임 변경
export const changeNickname = (nicknameRequest) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/nickname`,
    method: "PUT",
    body: JSON.stringify(nicknameRequest),
  });
};

// 비밀번호 변경
export const changePassword = (passwordRequest) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/password`,
    method: "PUT",
    body: JSON.stringify(passwordRequest),
  }).catch((error) => {
    if (error.message === "기존 비밀번호가 일치하지 않습니다.") {
      throw error; // 이 오류는 상위로 전파하여 UserProfile에서 처리
    }
    throw new Error("비밀번호 변경 중 오류가 발생했습니다.");
  });
};

// 사용자 팔로우
export const doFollowing = (followRequest) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/follow`,
    method: "PUT",
    body: JSON.stringify(followRequest),
  });
};

// 팔로우 취소
export const cancelFollowing = (followCancelRequest) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/follow`,
    method: "DELETE",
    body: JSON.stringify(followCancelRequest),
  });
};

// 팔로잉 조회
export const getFollowing = (userId) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/${userId}/following`,
    method: "GET",
  });
};

// 팔로워 조회
export const getFollower = (userId) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/${userId}/follower`,
    method: "GET",
  });
};

// 내 모든 플랜 조회
export const getAllMyPlans = (userId) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/${userId}/my-trip`,
    method: "GET",
  });
};

// 내가 북마크한 모든 플랜 조회
export const getAllBookmarkedPlans = (userId) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/${userId}/my-bookmark`,
    method: "GET",
  });
};

// 내가 좋아요한 모든 플랜 조회
export const getAllLikedPlans = (userId) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/${userId}/my-like`,
    method: "GET",
  });
};

// 내가 댓글 단 모든 플랜 조회
export const getAllCommentedPlans = (userId) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/${userId}/my-comment`,
    method: "GET",
  });
};

const MyPageService = {
  getUserProfileByNickname,
  getPersonalProfile,
  getAllMyPlans,
  getAllBookmarkedPlans,
  getAllLikedPlans,
  getAllCommentedPlans,
};

export default MyPageService;
