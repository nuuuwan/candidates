import gen_candidates
import gen_criteria
import src_py.gen_criterion_to_candidate_to_weight as gen_criterion_to_candidate_to_weight


def main():
    gen_candidates.main()
    gen_criteria.main()
    gen_criterion_to_candidate_to_weight.main()


if __name__ == "__main__":
    main()