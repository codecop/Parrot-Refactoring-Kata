#include <gtest/gtest.h>

#include <memory>

#include "Parrot.h"

static constexpr double epsilon = 0.0;

TEST(ParrotTest, SpeedOfEuropeanParrot) {
    auto parrot = std::unique_ptr<EuropeanParrot>(new EuropeanParrot{});
    EXPECT_NEAR(12.0, parrot->getSpeed(), epsilon);
}

TEST(ParrotTest, SpeedOfAfricanParrot_With_One_Coconut) {
    auto parrot = std::unique_ptr<AfricanParrot>(new AfricanParrot{ 1 });
    EXPECT_NEAR(3.0, parrot->getSpeed(), epsilon);
}

TEST(ParrotTest, SpeedOfAfricanParrot_With_Two_Coconuts) {
    auto parrot = std::unique_ptr<AfricanParrot>(new AfricanParrot{ 2 });
    EXPECT_NEAR(0.0, parrot->getSpeed(), epsilon);
}

TEST(ParrotTest, SpeedOfAfricanParrot_With_No_Coconuts) {
    auto parrot = std::unique_ptr<AfricanParrot>(new AfricanParrot{ 0 });
    EXPECT_NEAR(12.0, parrot->getSpeed(), epsilon);
}

TEST(ParrotTest, SpeedNorwegianBlueParrot_nailed) {
    auto parrot = std::unique_ptr<NorwegianBlueParrot>(new NorwegianBlueParrot{ 1.5, true });
    EXPECT_NEAR(0.0, parrot->getSpeed(), epsilon);
}

TEST(ParrotTest, SpeedNorwegianBlueParrot_not_nailed) {
    auto parrot = std::unique_ptr<NorwegianBlueParrot>(new NorwegianBlueParrot{ 1.5, false });
    EXPECT_NEAR(18.0, parrot->getSpeed(), epsilon);
}

TEST(ParrotTest, SpeedNorwegianBlueParrot_not_nailed_high_voltage) {
    auto parrot = std::unique_ptr<NorwegianBlueParrot>(new NorwegianBlueParrot{ 4, false });
    EXPECT_NEAR(24.0, parrot->getSpeed(), epsilon);
}
