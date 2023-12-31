package com.ssafy.benepick.global.api.dto.response;

import com.ssafy.benepick.domain.user.entity.UserCard;
import com.ssafy.benepick.domain.user.entity.UserCardCategory1;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "카드 카테고리1 정보 DTO")
public class ApiCategory1ResponseDto implements Serializable {
    private Long category1Id;
    private String category1Name;
    private List<ApiCategory2ResponseDto> category2List;
    private List<ApiCardBenefitResponseDto> cardBenefitList;

    public UserCardCategory1 toUserCardCategory1(UserCard userCard){
        return UserCardCategory1.builder()
                .userCardCategory1Name(category1Name)
                .cardCategory1Id(category1Id)
                .userCard(userCard)
                .userCardBenefitList(new ArrayList<>())
                .userCardCategory2List(new ArrayList<>())
                .build();
    }
}
