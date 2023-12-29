import instance from "@/api/axios";
import { DeleteCommentsProps, GetCommentsData, GetCommentsProps, PostCommentsProps, PutCommentsProps } from "@/api/comments/comments.types";
import { ENDPOINTS } from "@/api/config";

export const deleteComments = async ({
  commentId = 98,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: DeleteCommentsProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.COMMENT.DELETE(commentId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

export const getComments = async ({
  cardId = 4,
  size = 5,
  cursorId,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: GetCommentsProps): Promise<GetCommentsData | null> => {
  try {
    const res = await instance.get(ENDPOINTS.COMMENT.GET, {
      params: {
        size,
        cursorId,
        cardId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const postComments = async ({
  content = "string",
  cardId = 4,
  columnId = 16,
  dashboardId = 5,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: PostCommentsProps): Promise<Comment | null> => {
  try {
    const res = await instance.post(
      ENDPOINTS.COMMENT.POST,
      {
        content: "좋은 하루",
        cardId: 4,
        columnId: 16,
        dashboardId: 5,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const putComments = async ({
  commentId = 98,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: PutCommentsProps): Promise<Comment | null> => {
  try {
    const res = await instance.put(
      ENDPOINTS.COMMENT.PUT(commentId),
      {
        content: "나은님 메롱",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};
