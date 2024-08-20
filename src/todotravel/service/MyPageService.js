import { API_BASE_URL } from "../constant/backendAPI";
import { request } from "./APIService";

// 닉네임으로 특정 사용자 페이지 조회
export const getUserProfileByNickname = (nickname) => {
  return request({
    url: `${API_BASE_URL}/api/mypage/profile/${nickname}`,
    method: "GET",
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
